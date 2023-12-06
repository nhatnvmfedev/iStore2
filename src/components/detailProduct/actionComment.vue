<template>
  <div class="detailBox">
    <div class="titleBox">
      <label>Comment Box</label>
      <button type="button" class="close" aria-hidden="true">&times;</button>
    </div>
    <div class="commentBox">
      <p class="taskDescription">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
    <div class="actionBox">
      <ul class="commentList">
        <li>
          <div class="commenterImage">
            <img src="http://lorempixel.com/50/50/people/6" />
          </div>
          <div class="commentText">
            <p class="">Hello this is a test comment.</p>
            <span class="date sub-text">on March 5th, 2014</span>
          </div>
        </li>
        <li>
          <div class="commenterImage">
            <img src="http://lorempixel.com/50/50/people/7" />
          </div>
          <div class="commentText">
            <p class="">
              Hello this is a test comment and this comment is particularly very
              long and it goes on and on and on.
            </p>
            <span class="date sub-text">on March 5th, 2014</span>
          </div>
        </li>
        <li>
          <div class="commenterImage">
            <img src="http://lorempixel.com/50/50/people/9" />
          </div>
          <div class="commentText">
            <p class="">Hello this is a test comment.</p>
            <span class="date sub-text">on March 5th, 2014</span>
          </div>
        </li>
      </ul>
      <form class="form-inline" role="form">
        <div class="form-group col-md-10">
          <input class="form-control w-100" type="text" placeholder="Your comments" />
        </div>
        <div class="form-group">
          <button class="btn btn-success">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid'
export default {
  name: 'actionComment',
  data () {
    return {
      listComment: [
        {
          id: uuid.v1(),
          avt: '',
          name: 'Nhat',
          time: 'on March 5th, 2014',
          content: 'Hello this is a test comment and this comment is particularly very long and it goes on and on and on.',
          status: true
        },
        {
          id: uuid.v1(),
          avt: '',
          name: 'Yohei Umezu',
          time: 'on March 5th, 2022',
          content: 'Have you tried checking if your ResultsController@show returns the desired data?',
          status: false
        },
        {
          id: uuid.v1(),
          avt: '',
          name: 'Bhojendra Rauniyar',
          time: 'on May 3th, 2022',
          content: `Wasted almost one hour, didn't find a solution, so I wanted to contribute =)`,
          status: true
        }
      ]
    }
  }
}
</script>

<style scroped>

.detailBox {
  border: 1px solid #bbb;
  margin: 100px auto 0;
  max-width: 768px;
}

.titleBox {
  background-color: #fdfdfd;
  padding: 10px;
}

.titleBox label {
  color: #444;
  margin: 0;
  display: inline-block;
}

.commentBox {
  padding: 10px;
  border-top: 1px dotted #bbb;
}

.commentBox .form-group:first-child,
.actionBox .form-group:first-child {
  width: 80%;
}

.commentBox .form-group:nth-child(2),
.actionBox .form-group:nth-child(2) {
  width: 18%;
}

.actionBox .form-group * {
  width: 100%;
}

.taskDescription {
  margin-top: 10px 0;
}

.commentList {
  padding: 0;
  list-style: none;
  max-height: 200px;
  overflow: auto;
}

.commentList li {
  margin: 0;
  margin-top: 10px;
}

.commentList li>div {
  display: table-cell;
}

.commenterImage {
  width: 30px;
  margin-right: 5px;
  height: 100%;
  float: left;
}

.commenterImage img {
  width: 100%;
  border-radius: 50%;
}

.commentText p {
  margin: 0;
}

.sub-text {
  color: #aaa;
  font-family: verdana;
  font-size: 11px;
}

.actionBox {
  border-top: 1px dotted #bbb;
  padding: 10px;
}
</style>
