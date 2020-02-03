import { Breadcrumb, Icon } from 'antd'
import styled from '@emotion/styled'

type BreadcrumbItem = {
  icon?: string
  link?: string
  text: string
}

type BreadcrumbProps = {
  nav: BreadcrumbItem[]
}

const StyledBreadcrumb = styled(Breadcrumb)`
  width: 90%;
  margin: auto;
  font-size: 1.4rem;
  & i {
    font-size: 1.25rem !important;
  }
`

export const NavBreadcrumb = (props: BreadcrumbProps) => {
  const { nav } = props
  return (
    <StyledBreadcrumb>
      {nav.map(n => (
        <Breadcrumb.Item href={n.link}>
          {n.icon && <Icon type={n.icon} />}
          <span>{n.text}</span>
        </Breadcrumb.Item>
      ))}
    </StyledBreadcrumb>
  )
}
