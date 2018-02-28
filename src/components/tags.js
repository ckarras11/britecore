import React from 'react';
import tags from './tag-list';

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTag: '',
        };
        this.tagChange = this.tagChange.bind(this);
    }
    tagChange(e) {
        this.setState({ selectedTag: e.currentTarget.id });
    }

    render() {
        let subTags;
        const tagGroups = tags.map(tag => <li onClick={this.tagChange} id={tag.name} key={tag.name}>{tag.name}</li>);
        if (this.state.selectedTag === '') {
            subTags = <p>Select a tag group to see individual tags</p>;
        } else {
           const group = tags.filter(tag => tag.name === this.state.selectedTag);
           const singleTag = group[0].subtag.map(tag => <li id={tag} key={tag}>{tag}</li>);
           subTags = (<ul>
                        {singleTag}
                      </ul>);
        }
        return (
          <div>
            <h3 className="tag-heading">Tags</h3>
            <div className="tag-container">
              <div>
                <h4>Tag Group</h4>
                <ul>
                  {tagGroups}
                </ul>
              </div>
              <div>
                <h4>Tags</h4>
                {subTags}
              </div>
            </div>
          </div>
        );
    }
}

export default Tags;
