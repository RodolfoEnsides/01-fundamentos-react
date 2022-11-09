import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/40122769?v=4",
      name: "Rodolfo Ensides",
      role: "Web Developer"
    },
    content: [],
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Rodolfo Ensides" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque dolorum dolorem nam neque non labore beatae ipsum, qui doloremque esse quidem reprehenderit. Quibusdam deserunt illum vero unde explicabo laborum."
          />
          <Post 
            author="Natalia Watanabe" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque dolorum dolorem nam neque non labore beatae ipsum, qui doloremque esse quidem reprehenderit. Quibusdam deserunt illum vero unde explicabo laborum."
          />
        </main>
      </div>
    </div>
  )
}