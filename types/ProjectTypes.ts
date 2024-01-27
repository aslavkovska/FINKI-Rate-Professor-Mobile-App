export type RootStackParamList = {
  HomePage: undefined;
  Detail: {
    id: string;
    name: string;
    surname: string;
    image: string;
    email: string;
    description: string;
    reviews:string[] | undefined
    grade:number;
    status:string;
  };
  RatingPage: {
    id: string | undefined;
    name: string | undefined;
    surname: string | undefined;
    image: string | undefined;
    email: string | undefined;
    status:string | undefined
  };
  ProfilePage: undefined;
  MyRatings: undefined;
};
export type TBTNRATE = {
  nameBtn: string;
  person: {
    id: string;
    name: string;
    surname: string;
    image: string;
    email: string;
    status:string;
  };
};
export type TCard = {
  id: string;
  name: string;
  surname: string;
  image: string;
  email: string;
  description: string;
  grade: number;
  reviews?: string[];
  status:string;
};
export type TPCard = {
  id: string | undefined;
  imageUrl?: string;
  name?: string;
  surname?: string;
  grade?: number;
  email?: string;
  status?:string;
};
export type TRWidget = {
  setRating: number;
  handleChange: (newRating: number) => void;
};
export type TSearch = {
  handleChange: (e: any) => void;
  valueInput: string;
};
export interface LocationState {
  latitude: number;
  longitude: number;
}
