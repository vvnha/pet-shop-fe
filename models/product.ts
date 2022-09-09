export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  pet_list: [
    {
      pet: string;
    }
  ];
  promotion_list?: [
    {
      promotion: string;
    }
  ];
  image_list: string[];
}
