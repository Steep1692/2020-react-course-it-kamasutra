import {addPost} from "../redux/reducers/profileReducer";
import store from "../redux/store";

test('A new post should be added', () => {
    const newPostText = 'TEST-new-post-text';

    const action = addPost(newPostText);
    store.dispatch(action);

    const firstPostMessage = store.getState().profileReducer.posts[0].message
    expect(firstPostMessage).toBe(newPostText);
});
