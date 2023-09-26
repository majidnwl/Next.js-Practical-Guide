import React from 'react'

const BreadCrumb = ({header, text}: any) => {
    return (
        <div className="breadcrumbs section-padding bg-[url('../images/all-img/bred.html')] bg-cover bg-center bg-no-repeat">
            <div className="container text-center">
                <h2>{header}</h2>
                <nav>
                    <ol className="flex items-center justify-center space-x-3">
                        <li className="breadcrumb-item"><a href="index-2.html">Pages </a></li>
                        <li className="breadcrumb-item">-</li>
                        <li className="text-primary">{text}</li>
                    </ol>
                </nav>
            </div>
        </div>

    )
}

export default BreadCrumb