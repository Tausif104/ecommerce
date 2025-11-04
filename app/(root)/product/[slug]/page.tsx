const SingleProduct = (props: { params: { slug: string } }) => {
  const { slug } = props.params

  return <>Single Product {slug}</>
}

export default SingleProduct
