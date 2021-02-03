export interface MapperConstructor<Persistence, Dto, Model> {
  toDto: (d: Model) => Dto
  toPersistence: (d: Model) => Persistence
  toDomain: (p: Persistence) => Model
}
