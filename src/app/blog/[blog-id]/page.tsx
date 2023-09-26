import Blog from '@/components/blog/Blog'
import BreadCrumb from '@/components/elements/BreadCrumb'
import React from 'react'

const SingleBlogPage = () => {
    return (
        <>
            <BreadCrumb header="Single Blog" text="Details of a blog" />
            <Blog />
        </>
    )
}

export default SingleBlogPage