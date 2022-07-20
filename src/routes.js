import Login from './routes/Login.svelte'
import Register from './routes/Register.svelte'
import NotFound from './routes/NotFound.svelte'
import Home from './routes/Home.svelte'
import Chat from './routes/Chat.svelte'

export default {
  '/': Login,
  '/register': Register,
  '/home': Home,
  '/chat/:username': Chat,
  // The catch-all route must always be last
  '*': NotFound,
}
