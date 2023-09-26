import Blogs from '@/components/blog/Blogs'
import BreadCrumb from '@/components/elements/BreadCrumb'
import React from 'react'

const BlogPage = () => {
    return (
        <>
            <BreadCrumb header="Blog" text="Stay upaded with us" />
            <Blogs />
        </>
    )
}

export default BlogPage