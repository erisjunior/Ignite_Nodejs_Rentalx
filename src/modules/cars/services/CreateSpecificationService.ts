import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.categoriesRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateSpecificationService };