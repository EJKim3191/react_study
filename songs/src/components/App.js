import React from 'react';
//import actions from '../actions';
//webpack은 specify 되지 않은 direction에 대해 자동으로 index를 준다
//import { selectSong } from '../actions';
//{}->export의 정확한 함수를 import 하기 위해서
import SongList from './SongList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
            </div>
        </div>
        );
};

export default App;
