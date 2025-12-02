function Hello() {
  var name="swapnil";
  let surname=()=>{
    return "Mane";
  }
  return (
    <div>
      <h6>Hello {name} {surname()}</h6>
    </div>
  );
}

export default Hello;