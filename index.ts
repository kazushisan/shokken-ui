// atoms
import Button from './components/atoms/Button'
import Input from './components/atoms/Input'
import AdminNavi from './components/atoms/AdminNavi'

// molecules
import AdminOrderCard from './components/molecules/AdminOrderCard'
import LoginForm from './components/molecules/LoginForm'
import AdminProductCard from './components/molecules/AdminProductCard'
import MenuProductCard from './components/molecules/MenuProductCard'
import UserOrderCard from './components/molecules/UserOrderCard'

// organisms
import AdminOrderList from './components/organisms/AdminOrderList'

export const atoms: {
  Button: typeof Button
  Input: typeof Input
  AdminNavi: typeof AdminNavi
} = { Button, Input, AdminNavi }

export const molecules: {
  AdminOrderCard: typeof AdminOrderCard
  LoginForm: typeof LoginForm
  AdminProductCard: typeof AdminProductCard
  MenuProductCard: typeof MenuProductCard
  UserOrderCard: typeof UserOrderCard
} = {
  AdminOrderCard,
  LoginForm,
  MenuProductCard,
  UserOrderCard,
  AdminProductCard
}

export const organisms: {
  AdminOrderList: typeof AdminOrderList
} = { AdminOrderList }
