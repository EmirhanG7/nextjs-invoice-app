import Container from "@/components/Container";


export default function Footer() {
  return (

    <footer className='mt-12 mb-8'>
      <Container className='flex justify-between gap-4'>
        <p className='text-sm'>
          Invoicepedia &copy; {new Date().getFullYear()}
        </p>
        <p className='text-sm'>
          Created by Emirhan Gözüküçük with Next.js, Clerk, Xata
        </p>
      </Container>
    </footer>
  )
}