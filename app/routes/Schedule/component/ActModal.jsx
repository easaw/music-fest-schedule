import PureModal from 'react-pure-modal';
import 'react-pure-modal/src/react-pure-modal.css';
import {Component} from 'react';

export default class ActModal extends Component {
    constructor(props) {
      super(props);
      const {id, dj, start, end, stageId, isOpen} = props;
      this.state = {
        id,
        dj,
        start,
        end,
        stageId,
        isOpen
      }
    }

    static propTypes = {
        id: React.PropTypes.string.isRequired,
        dj: React.PropTypes.string.isRequired,
        start: React.PropTypes.sting.isRequired,
        end: React.PropTypes.func.isRequired,
        stageId: React.PropTypes.func.isRequired
    };

    render() {
      const {id, dj, start, end, stageId} = this.state;
      <PureModal header=>

      </PureModal>
    }
}
