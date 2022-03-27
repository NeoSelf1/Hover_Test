import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.content}>
      <b className={classes.content__text1}>
        지난 겨울 방학, 나는 나를 새로운 나(NeoSelf)로 확장했다.
      </b>{' '}
      <b className={classes.content__text2}>
        창업하고자 하는 아이템을 앱으로 출시하고 싶다는 생각 하나로,
      </b>{' '}
      <b className={classes.content__text3}>
        닥치는 대로 독학한 것이 계기가 되었다고 생각한다.
      </b>{' '}
      <b className={classes.content__text4}>
        그 끝에 나는 아직 미숙하지만 디자이너, 개발자, 퍼블리셔라는 직책 간의
        경계에서 벗어나,
      </b>{' '}
      <b className={classes.content__text5}>
        컴퓨터언어와 조금이나마 친숙해 질 수 있었다.
      </b>{' '}
      <b className={classes.content__text6}>
        처음에는 작은 규모의 모바일 앱에서 시작하여,
      </b>{' '}
      <b className={classes.content__text7}>악보 통역 프로그램</b>{' '}
      <b className={classes.content__text12}>
        그리고 최종적으로 현재 병행하고 있는 직장의 홈페이지를 성공적으로
        퍼블리시 한 후,
      </b>{' '}
      <b className={classes.content__text8}>
        난 이런 귀중한 경험을 또 잡기 위해, 바라보는 시각을 넓히는(확장하는)
      </b>{' '}
      <b className={classes.content__text9}>습관을 가지게 되었다.</b>{' '}
      <b className={classes.content__text10}>
        만일 현재까지도 스스로를 프레임에 가두고 있었다면,
      </b>{' '}
      <b className={classes.content__text11}>
        이런 기회가 와도 보이지 않거나, 무시하였을 것이다.
      </b>
    </div>
  );
}

export default App;
