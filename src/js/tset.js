function a(){
  const a =3;
  const b = a;
  console.log(this.b);
}
const c = a;

console.log(c.a);