function Random() {
  let Number = Math.floor(Math.random() * 100) + 1;
  return (
    <div>
      <h1>Random number is :{Number}</h1>
    </div>
  );
}

export default Random;