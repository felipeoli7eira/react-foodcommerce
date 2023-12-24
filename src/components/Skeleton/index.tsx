import { SkeletonElement } from "./styles";

export interface SkeletonPropsInterface {
  type: 'title' | 'text' | 'image' | 'thumbnail';
}

export default function Skeleton({ type }: SkeletonPropsInterface) {
  return (<SkeletonElement type={type}></SkeletonElement>);
}
