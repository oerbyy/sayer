import React from 'react';
import {Redirect} from 'react-router-dom';

import WhispersList from './components/WhispersList';
import WhisperDetails from './components/WhisperDetails';
import NewWhisper from './components/NewWhisper';

export const routes = [
  {
    path: '/whispers/:id',
    main: props => <WhisperDetails {...props} />
  },
  {
    path: '/whispers',
    main: props => <WhispersList {...props} />
  },

  {
    path: '/new-whisper',
    main: props => <NewWhisper {...props} />
  },
  {
    path: '/*',
    main: props => <Redirect to="/whispers" {...props} />
  }
];
