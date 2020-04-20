import { useEffect } from 'react'

export default () => {
  useEffect(() => {
    const { OmiseCard } = window as any
    OmiseCard.configure({
      publicKey: 'pkey_test_5jls5tfnoydtv5ybkrm',
      amount: 1200,
    })
    OmiseCard.configureButton('#checkout-button', {
      frameLabel: 'Merchant name',
      submitLabel: 'PAY RIGHT NOW!',
    })
    OmiseCard.attach()
  }, [])
  return (
    <div>
      <form method="post">
        <button id="checkout-button">ชำระเงิน</button>
      </form>
    </div>
  )
}
