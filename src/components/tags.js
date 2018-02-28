import React from 'react';
import tags from './tag-list';
import { connect } from 'react-redux';
import { setTagGroup, setTag } from '../actions';

function mapStateToProps(state) {
  return {
    selectedTagGroup: state.selectedTagGroup,
  };
}

class Tags extends React.Component {
    constructor(props) {
        super(props);

        this.setTagGroup = this.setTagGroup.bind(this);
        this.setTag = this.setTag.bind(this);
    }

    setTagGroup(e) {
      this.props.dispatch(setTagGroup(e.currentTarget.id));
    }
    setTag(e) {
      this.props.dispatch(setTag(e.currentTarget.id));
    }

    render() {
        let subTags;
        const tagGroups = tags.map(tag => <li onClick={this.setTagGroup} id={tag.name} key={tag.name}>{tag.name}</li>);
        if (this.props.selectedTagGroup === '') {
            subTags = <p>Select a tag group to see individual tags</p>;
        } else {
           const group = tags.filter(tag => tag.name === this.props.selectedTagGroup);
           const singleTag = group[0].subtag.map(tag => <li onClick={this.setTag} id={tag} key={tag}>{tag}</li>);
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

export default connect(mapStateToProps)(Tags);
