const Details = ({item}) => {
    return(
        <div class="card"  style={{"width": "28rem"}}>
  
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{item.company.display_name}</h6>
    <p class="card-text">{item.description}</p>
  </div>
  <div>Posted on {item.created}</div>
  <div>Location: {item.location.display_name}</div>
</div>
    )

}

export default Details