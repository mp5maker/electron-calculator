interface RoutesInterface {
  path: string
  alternativePath?: string
  state?: string
}

export const Home: RoutesInterface = {
  path: '/',
  alternativePath: '/home',
  state: 'home'
}
