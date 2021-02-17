import React from 'react'
import "../../Styling/index.css"
import story from "../../Images/Content/story.jpg"

export default function Story() {
    return (
            <section id="story">
                <div className="story-container">
                    <h4>OUR STORY</h4>
                    <div className="story-img-wrapper">
                        <img src={story} alt="" className="story-img"/>
                    </div>
                    <div className="story-p-container">
                    <div className="story-p-wrapper">
                        <p className="story-p">
                        DHB Central started as DHB Bank. We were asked to change our name since we’re not a bank whatsoever. After a few rounds of “Battle of The Name” on Instagram, our community voted for DHB Central as our new baby. 
                        </p>
                        <p className="story-p">
                        Founded during the worst year of our lives, 2020 turned out to be slightly beautiful. We started from the comfort of our own kitchen (well we were forced to) and are now located in Rasta, TTDI. Just look for the yellow food truck. 
                        </p>
                        <p className="story-p">
                        Basically, we’re just three men in their late 20s trying things out before the end lay its sheet on us. Hope you come and taste the mediocracy that is DHB Central.
                        </p>
                </div>
                </div>
                </div>
            </section>
                )
}
