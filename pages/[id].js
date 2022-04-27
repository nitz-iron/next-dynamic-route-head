import Head from "next/head";
import { Router, useRouter } from "next/router";

export default function ById() {
    const router = useRouter();
    const { id } = router.query;
    
    return <div>
        <Head>
            {getHeadScripts()}
        </Head>
        <section>
            {id}
        </section>
    </div>
}

function getHeadScripts() {
    return <>
        <script src="one" async />
        {getLevel2Scripts()}
    </>;
}

function getLevel2Scripts() {
    return <>
        <script async src="two" />
        <script async src="three" />
        <script async src="four" />
    </>
}