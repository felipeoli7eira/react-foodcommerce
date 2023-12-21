interface HeadPropsInterface {
  title: string;
  desciption?: string;
}

export function Head(props: HeadPropsInterface) {
  document.title = 'FoodCommerce - '.concat(props.title)
  document.querySelector('[name=description')?.setAttribute('content', props?.desciption ?? '')

  return (<>{/** void */}</>);
}
