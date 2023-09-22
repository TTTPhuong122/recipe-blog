export default interface Recipe {
  id: string
  name: string
  image: string
  ingredients: string
  description: string
  introduction: Step[]
  result: {
    description: string
    image: string
  }
}

export interface Step {
  step: string
  description: string
  image: string
}
