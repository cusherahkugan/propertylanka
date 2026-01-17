import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Property Lanka',
  description: 'Real Estate Website',
}

const Mainlayout = ({children}) => {
  return (
    <html lang="en">
       <body>
        <div>
      {children}
       </div>
       </body>
 
    </html>
   
  )
}

export default Mainlayout;
