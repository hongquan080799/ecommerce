export async function load({ redirect }: { redirect: (path: string) => void }) {
  // Check if the user is authenticated
  const userInfo = sessionStorage.getItem('userInfo');
  const jwtToken = sessionStorage.getItem('jwt');

  const isAuthenticated = userInfo !== null && jwtToken !== null;

  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return redirect('/authentication/sign-in');
  }
}