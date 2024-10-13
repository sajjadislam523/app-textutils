import React from 'react'

export default function About() {
    return (
        <div className='my-4 space-y-4'>
            <h1 className='text-2xl font-bold'>About Us</h1>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                <div className="collapse-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eius velit, rem vero ipsa nisi ut voluptate distinctio necessitatibus at fugit architecto quo adipisci deserunt magni doloribus voluptates ipsam? Eligendi, saepe architecto!</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                <div className="collapse-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet minus ullam omnis saepe enim voluptatibus officiis quis alias rerum, maxime non corporis praesentium natus pariatur voluptatem accusamus molestias quas maiores provident odit et exercitationem incidunt laborum! Iste quidem suscipit ut error neque natus architecto!</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                <div className="collapse-content">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, ratione iste aperiam unde adipisci sapiente mollitia quaerat natus? Ipsam tempora commodi officia adipisci similique, excepturi, inventore cumque fugiat consequatur reiciendis beatae recusandae ut delectus dolores, neque dignissimos atque impedit libero modi? Id nesciunt excepturi et, voluptatibus qui obcaecati aspernatur magni laborum provident maxime assumenda expedita deleniti nam, impedit, a distinctio!</p>
                </div>
            </div>
        </div>
    )
}
