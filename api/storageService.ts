import { Storage, Bucket, SaveOptions } from "@google-cloud/storage";

class StorageService {
  private bucketName = "gypstore-storage";
  private projectId = "pure-heuristic-275513";
  private bucket: Bucket = null;

  constructor() {
    const storage = new Storage({
      projectId: this.projectId,
      credentials: require("./configs/service-account.json"),
    });
    this.bucket = storage.bucket(this.bucketName);
  }

  upload = async (
    filePath: string,
    content: string | Buffer,
    options: SaveOptions
  ) => {
    const file = this.bucket.file(filePath);
    await file.save(content, {
      resumable: false,
      predefinedAcl: "publicRead",
      ...options,
      metadata: {
        cacheControl:
          "public, max-age=0, s-maxage=60, stale-while-revalidate=120",
      },
    });
    return `https://storage.cloud.google.com/${this.bucketName}/${filePath}`;
  };

  download = async (filePath: string) => {
    return await this.bucket.file(filePath).download();
  };

  removeFile = async (filename: string) => {
    return await this.bucket.file(filename).delete();
  };

  listFiles = async (prefix: string = "") => {
    const [files] = await this.bucket.getFiles({ prefix });
    return files;
  };
}

export const storageService = new StorageService();
