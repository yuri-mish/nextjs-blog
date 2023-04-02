import { useEffect } from "react";
import { useRouter } from 'next/router'

export default function FourNotFourPage() {
  // return <div className={styles.heading}>
  const router = useRouter()
  
  useEffect(() => {
    // Always do navigations after the first render
    // router.push('/404', undefined, { shallow: true })
  }, [router])

  return (
    <div>
      <h1>404 Error Page</h1>
      <h3>Requested page not found</h3>
    </div>
  );
}
