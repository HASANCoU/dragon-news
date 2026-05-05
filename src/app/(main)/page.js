import { redirect } from "next/navigation"


const defaultPage = "01"
export default async function Home() {
 redirect(`/category/${defaultPage}`)

}
