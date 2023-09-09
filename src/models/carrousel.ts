export interface ICarrousel {
  data: {
    title: string;
    index: number;
    subtitle: string;
    isButton?: boolean, 
    funcButton?: () => void;
    buttonTitle?: string;
  }[];
}
