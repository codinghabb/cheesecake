
import Blogs from './components/blogs'
import Contact from './components/contact'
import Intro from './components/intro'
import Menu from './components/menu'
import Nav from './components/navbar'

export default function Home() {
  return (
    <main >
        <Nav />
        <Intro />
        <Menu />
        <Blogs />
        <Contact />
    </main>
  )
}
