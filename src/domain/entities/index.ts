// Rendimentos
//
// Compras de supermercado
// Consumos de eletricidade, agua, luz, gás, comunicações
// Crédito: Casa, Carro, Pessoal
// Impostos: IMI, IUC, IVA
// Despesas: Condomínio, Contabilidade, Cotas
// Seguros: Vida, Multi-riscos, Carro
// Combustível
//
// Account, Transaction

/** ----------------------------------------------------------------- */
export interface AccountModel {
  uuid: string
  balance: number
  lastUpdated: Date
}

export type AccountModelCollection = AccountModel[]

export interface TransactionType {
  uuid: string
  name: string
  income: boolean
}

export interface Transaction {
  uuid: string
  account: string
  type: string
  value: number
}
/** ----------------------------------------------------------------- */

export interface ProductType {
  uuid: string
}

export interface Product {
  uuid: string
  type: string
}

export interface ProductPurchase {
  uuid: string
  product: string
  value: number
  quantity: number
  date: Date
}

export interface Balance {
  value: number
}
