import { Params } from "react-router-dom";

export interface usersData extends Array<object> {
  name: string;
}

export interface postData {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface commentsData extends Array<object> {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export interface urlParams extends Readonly<Params<string>> {
  id: string;
}

export interface publiesDataInterface {
  body: String;
  id: number;
  title: String;
  userId: number;
}

export interface userName {
  data: [
    {
      name: String;
    }
  ];
}
