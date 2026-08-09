


  const Title = ({titleDesc, clase, tag = "h2"}: {titleDesc: string; clase: string; tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"}) => {
    const Tag = tag;
    return (
          <Tag className={`title ${clase}`}>{titleDesc}</Tag>
    )
  }

  export default Title