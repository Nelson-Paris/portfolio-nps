export default function Contact(){
const email = 'nelson.paris.pro@gmail.com'
return (
<section className="card">
<h1>Contact</h1>
<a className="btn-primary" href={`mailto:${email}?subject=Contact%20Portfolio`}>
M’écrire
</a>
</section>
)
}