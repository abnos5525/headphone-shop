'use client'
import Page500 from "@/components/errors/Page500";

export default function Error({ error, reset }) {
    return <Page500 error={error} reset={reset}/>
}