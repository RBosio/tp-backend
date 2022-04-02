export interface CategoryI{
  id: number
  name: string
  price: number
  stock: number
  created_at?: Date
  category: CategoryI
  image?: string
  status?: boolean
}