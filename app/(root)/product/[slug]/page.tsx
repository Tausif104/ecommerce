const SingleProduct = async (props: {
  params: { slug: string } | Promise<{ slug: string }>
}) => {
  const { slug } = await props.params

  return <>Single Product {slug}</>
}

export default SingleProduct
