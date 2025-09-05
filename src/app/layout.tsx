import "../styles/theme.css";
export default function Root({children}:{children:React.ReactNode}){
  return <html lang="tr"><body className="antialiased">{children}</body></html>;
}
