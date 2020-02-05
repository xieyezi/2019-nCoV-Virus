;(this['webpackJsonpwuhan-virus'] = this['webpackJsonpwuhan-virus'] || []).push([
  [0],
  {
    123: function(e, t, n) {
      e.exports = {
        newsitem: 'style_newsitem__3GDJz',
        newscontent: 'style_newscontent__Fq2J7',
        footer: 'style_footer__3a63a',
        area: 'style_area__2UXdS',
        origin: 'style_origin__2hUNY'
      }
    },
    142: function(e, t, n) {
      e.exports = {
        cardbox: 'style_cardbox__tiQww',
        card: 'style_card__WVS6y',
        image: 'style_image__2aTav',
        tip: 'style_tip__Ptp0H',
        title: 'style_title__35CVV'
      }
    },
    187: function(e, t, n) {
      e.exports = { category: 'style_category__3QUH4', add: 'style_add__xqv3y', tip: 'style_tip__BaCAO' }
    },
    421: function(e, t, n) {
      e.exports = { mapbox: 'style_mapbox___c_Dz' }
    },
    428: function(e, t, n) {
      e.exports = n(994)
    },
    433: function(e, t, n) {},
    434: function(e, t, n) {},
    45: function(e, t, n) {
      e.exports = {
        top: 'style_top__1VCSg',
        title: 'style_title__aPjei',
        tip: 'style_tip__1aBrD',
        map: 'style_map__wJWW5',
        category: 'style_category__3FDAB',
        allCountry: 'style_allCountry__3pwNJ',
        card: 'style_card__1UjcC',
        maptip: 'style_maptip__FsC97',
        table: 'style_table__1JI-m',
        newsBox: 'style_newsBox__3cHCM',
        trendBox: 'style_trendBox__zpyqh',
        rumorBox: 'style_rumorBox__2u0wc',
        footer: 'style_footer__348qH'
      }
    },
    624: function(e, t, n) {
      var a = {
        './anhui.json': [997, 4],
        './aomen.json': [998, 5],
        './beijing.json': [999, 6],
        './chongqing.json': [1e3, 7],
        './fujian.json': [1001, 8],
        './gansu.json': [1002, 9],
        './guangdong.json': [1003, 10],
        './guangxi.json': [1004, 11],
        './guizhou.json': [1005, 12],
        './hainan.json': [1006, 13],
        './hebei.json': [1007, 14],
        './heilongjiang.json': [1008, 15],
        './henan.json': [1009, 16],
        './hubei.json': [1010, 17],
        './hunan.json': [1011, 18],
        './jiangsu.json': [1012, 19],
        './jiangxi.json': [1013, 20],
        './jilin.json': [1014, 21],
        './liaoning.json': [1015, 22],
        './neimenggu.json': [1016, 23],
        './ningxia.json': [1017, 24],
        './qinghai.json': [1018, 25],
        './shandong.json': [1019, 26],
        './shanghai.json': [1020, 27],
        './shanxi.json': [1021, 28],
        './shanxi1.json': [1022, 29],
        './sichuan.json': [1023, 30],
        './taiwan.json': [1024, 31],
        './tianjin.json': [1025, 32],
        './xianggang.json': [1026, 33],
        './xinjiang.json': [1027, 34],
        './xizang.json': [1028, 35],
        './yunnan.json': [1029, 36],
        './zhejiang.json': [1030, 37]
      }
      function r(e) {
        if (!n.o(a, e))
          return Promise.resolve().then(function() {
            var t = new Error("Cannot find module '" + e + "'")
            throw ((t.code = 'MODULE_NOT_FOUND'), t)
          })
        var t = a[e],
          r = t[0]
        return n.e(t[1]).then(function() {
          return n.t(r, 3)
        })
      }
      ;(r.keys = function() {
        return Object.keys(a)
      }),
        (r.id = 624),
        (e.exports = r)
    },
    994: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        r = n.n(a),
        i = n(11),
        o = n.n(i),
        s = (n(433), n(434), n(435), n(269)),
        c = (n(437), n(267)),
        l = (n(996), n(268)),
        u = n(68),
        m = n.n(u),
        d = n(180),
        p = n(181),
        h = n(185),
        f = n(182),
        g = n(186),
        v = n(104),
        y = n.n(v),
        x = '964dc226dd5b57e892e6199735b6c55f'
      var E = n(189)
      function _(e) {
        var t = []
        return (
          e.forEach(function(e) {
            var n = Object(E.a)({ name: e.provinceShortName, value: e.confirmedCount }, e)
            t.push(n)
          }),
          t
        )
      }
      function w(e, t) {
        var n = []
        return (
          t.includes('\u7701') || t.includes('\u81ea\u6cbb\u533a')
            ? e.forEach(function(e) {
                var t = Object(E.a)({ name: e.cityName + '\u5e02', value: e.confirmedCount }, e)
                n.push(t)
              })
            : e.forEach(function(e) {
                var t = Object(E.a)({ name: e.cityName, value: e.confirmedCount }, e)
                n.push(t)
              }),
          n
        )
      }
      var b = n(264),
        j = n.n(b),
        C = n(419),
        L = n.n(C),
        N = (n(512), n(516), n(139)),
        k = n.n(N),
        S = n(121),
        D = n.n(S),
        I = n(15),
        T = n.n(I),
        O =
          (n(585),
          n(608),
          n(227),
          {
            安徽: 'anhui',
            澳门: 'aomen',
            北京: 'beijing',
            重庆: 'chongqing',
            福建: 'fujian',
            甘肃: 'gansu',
            广东: 'guangdong',
            广西: 'guangxi',
            贵州: 'guizhou',
            海南: 'hainan',
            河北: 'hebei',
            黑龙江: 'heilongjiang',
            河南: 'henan',
            湖北: 'hubei',
            湖南: 'hunan',
            江苏: 'jiangsu',
            江西: 'jiangxi',
            吉林: 'jilin',
            辽宁: 'liaoning',
            内蒙古: 'neimenggu',
            宁夏: 'ningxia',
            青海: 'qinghai',
            山东: 'shandong',
            上海: 'shanghai',
            山西: 'shanxi',
            四川: 'sichuan',
            台湾: 'taiwan',
            天津: 'tianjin',
            香港: 'xianggang',
            新疆: 'xinjiang',
            西藏: 'xizang',
            云南: 'yunnan',
            浙江: 'zhejiang',
            陕西: 'shanxi'
          }),
        z = n(421),
        B = n.n(z),
        M = (function(e) {
          function t(e) {
            var n
            return (
              Object(d.a)(this, t),
              ((n = Object(h.a)(this, Object(f.a)(t).call(this, e))).getOption = function() {
                var e = n.props,
                  t = e.provinceName,
                  a = e.mapList,
                  r = t ? O[t] : ''
                return {
                  visualMap: {
                    show: !0,
                    type: 'piecewise',
                    min: 0,
                    max: 2e3,
                    align: 'right',
                    top: '2%',
                    right: 0,
                    left: 'center',
                    inRange: { color: ['#ffc0b1', '#ff8c71', '#ef1717', '#9c0505'] },
                    pieces: [
                      { min: 1e3 },
                      { min: 500, max: 999 },
                      { min: 100, max: 499 },
                      { min: 10, max: 99 },
                      { min: 1, max: 9 }
                    ],
                    orient: 'horizontal',
                    showLabel: !0,
                    padding: 5,
                    text: ['\u9ad8', '\u4f4e'],
                    itemWidth: 10,
                    itemHeight: 10,
                    textStyle: { fontSize: 10 }
                  },
                  series: [
                    {
                      left: 'center',
                      type: 'map',
                      name: '\u786e\u8bca\u4eba\u6570',
                      label: { show: !0, position: 'inside', fontSize: 6 },
                      mapType: r || 'china',
                      data: a,
                      zoom: r ? 1.1 : 1.2,
                      roam: !1,
                      showLegendSymbol: !1,
                      rippleEffect: { show: !0, brushType: 'stroke', scale: 2.5, period: 4 }
                    }
                  ]
                }
              }),
              (n.state = {}),
              n
            )
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(
              t,
              [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props.onClick
                    return a.createElement(D.a, {
                      className: B.a.mapbox,
                      style: { height: '400px' },
                      echarts: T.a,
                      option: this.getOption(),
                      notMerge: !0,
                      lazyUpdate: !1,
                      onEvents: {
                        click: function(t) {
                          e(t.name)
                        }
                      }
                    })
                  }
                }
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e) {
                    var t, a
                    return m.a.async(function(r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            ;(t = e.provinceName),
                              '' === (t || '')
                                ? n
                                    .e(3)
                                    .then(n.t.bind(null, 1031, 3))
                                    .then(function(e) {
                                      T.a.registerMap('china', e.default)
                                    })
                                : ((a = O[t]),
                                  n(624)('./'.concat(a, '.json')).then(function(e) {
                                    T.a.registerMap(a, e.default)
                                  }))
                          case 3:
                          case 'end':
                            return r.stop()
                        }
                    })
                  }
                }
              ]
            ),
            t
          )
        })(a.Component),
        U = (n(625), n(270)),
        H = (n(418), n(184)),
        F = n(123),
        W = n.n(F),
        Y = function(e) {
          return a.createElement(
            'div',
            { className: W.a.newsitem },
            a.createElement(
              'p',
              null,
              k()(e.news.pubDate).format('YYYY\u5e74MM\u6708DD\u65e5 HH:mm'),
              ' (',
              e.news.pubDateStr,
              ')'
            ),
            a.createElement(
              H.a,
              { title: e.news.title },
              a.createElement('p', { className: W.a.newscontent }, e.news.summary),
              a.createElement(
                'div',
                { className: W.a.footer },
                a.createElement(
                  'p',
                  null,
                  '\u5730\u533a:',
                  a.createElement('span', { className: W.a.area }, e.news.provinceName)
                ),
                a.createElement(
                  'p',
                  {
                    onClick: function() {
                      return q(e.news.sourceUrl)
                    }
                  },
                  '\u6765\u6e90:',
                  a.createElement('span', { className: W.a.origin }, e.news.infoSource)
                )
              )
            )
          )
        },
        q = function(e) {
          window.open('about:blank').location.href = e
        },
        P = function(e) {
          var t = e.newlist
          return a.createElement(
            U.a,
            null,
            t.map(function(e, t) {
              return a.createElement(U.a.Item, { key: t }, a.createElement(Y, { news: e }))
            })
          )
        },
        J = n(187),
        A = n.n(J),
        R = function(e) {
          var t = e.title,
            n = e.count,
            r = e.addcount,
            i = e.color
          return a.createElement(
            'div',
            { style: { color: i }, className: A.a.category },
            a.createElement('p', null, t),
            a.createElement('p', null, n, '\u4f8b'),
            a.createElement(
              'p',
              null,
              a.createElement('span', { className: A.a.tip }, '\u8f83\u6628\u65e5'),
              a.createElement('span', { className: A.a.add }, '+', r)
            )
          )
        },
        V =
          (n(642),
          n(353),
          function(e) {
            return {
              tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c} ({d}%)' },
              legend: {
                orient: 'horizontal',
                left: 'center',
                data: ['\u5728\u8bca\u4eba\u6570', '\u6b7b\u4ea1\u4eba\u6570', '\u6cbb\u6108\u4eba\u6570']
              },
              color: ['#e57471', '#919399', '#7ebe50'],
              series: [
                {
                  name: '\u5360\u6bd4\u7387',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: e,
                  emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' } }
                }
              ]
            }
          }),
        G = function(e) {
          var t = e.virusDesc,
            n = [],
            r = { name: '\u5728\u8bca\u4eba\u6570', value: t.confirmedCount - t.deadCount - t.curedCount },
            i = { name: '\u6b7b\u4ea1\u4eba\u6570', value: t.deadCount },
            o = { name: '\u6cbb\u6108\u4eba\u6570', value: t.curedCount }
          return (
            n.push(r),
            n.push(i),
            n.push(o),
            a.createElement(D.a, { echarts: T.a, option: V(n), notMerge: !0, lazyUpdate: !0 })
          )
        },
        K = (n(655), n(423)),
        Q = n(142),
        X = n.n(Q),
        $ = function(e) {
          var t = e.rumorList
          return a.createElement(
            K.a,
            { style: { background: '#fff', height: '450px' } },
            t.map(function(e) {
              var t = ''
              return (
                ('\u8c23\u8a00' !== e.explain &&
                  '\u4f2a\u79d1\u5b66' !== e.explain &&
                  '\u6709\u5931\u5b9e' !== e.explain) ||
                  (t = 'https://assets.dxycdn.com/gitrepo/ncov-mobile/dist/static/badge-big@2x.5395c013.png'),
                '\u5c1a\u65e0\u5b9a\u8bba' === e.explain &&
                  (t = 'https://assets.dxycdn.com/gitrepo/ncov-mobile/dist/static/badge-y-big@2x.c0fd84da.png'),
                a.createElement(
                  'div',
                  { className: X.a.cardbox, key: e.id },
                  a.createElement(
                    H.a,
                    {
                      className: X.a.card,
                      cover: a.createElement('img', {
                        alt: '\u56fe\u7247',
                        style: { borderRadius: '20px 20px 0px 0px', opacity: 0.8, height: 200 },
                        src: e.imgsrc
                      })
                    },
                    a.createElement('img', { src: t, alt: '', className: X.a.tip }),
                    a.createElement(
                      'div',
                      null,
                      a.createElement('p', { className: X.a.title }, e.title),
                      a.createElement('p', null, e.desc)
                    )
                  )
                )
              )
            })
          )
        },
        Z =
          (n(668),
          n(688),
          n(689),
          function(e, t, n, a, r, i) {
            return {
              tooltip: { trigger: 'axis' },
              legend: { orient: 'horizontal', left: 'center', data: a },
              grid: { left: '3%', right: '4%', bottom: '3%', containLabel: !0 },
              xAxis: { type: 'category', boundaryGap: !1, data: e },
              yAxis: { type: 'value' },
              series: [
                {
                  name: a[0],
                  type: 'line',
                  stack: '\u603b\u91cf',
                  itemStyle: { normal: { color: r, lineStyle: { color: r } } },
                  data: t
                },
                {
                  name: a[1],
                  type: 'line',
                  stack: '\u603b\u91cf',
                  itemStyle: { normal: { color: i, lineStyle: { color: i } } },
                  data: n
                }
              ]
            }
          }),
        ee = function(e) {
          var t = e.dateList,
            n = e.firstList,
            r = e.secondList,
            i = e.legendData,
            o = e.firstColor,
            s = e.secondColor
          return a.createElement(D.a, { echarts: T.a, option: Z(t, n, r, i, o, s), notMerge: !0, lazyUpdate: !0 })
        },
        te = n(45),
        ne = n.n(te),
        ae = (function(e) {
          function t(e) {
            var n
            return (
              Object(d.a)(this, t),
              ((n = Object(h.a)(this, Object(f.a)(t).call(this, e))).initData = function() {
                var e, t, a, r, i, o, s
                return m.a.async(function(c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (c.next = 2),
                          m.a.awrap(
                            y()({ method: 'get', url: 'http://api.tianapi.com/txapi/ncov/index?key='.concat(x) })
                          )
                        )
                      case 2:
                        return (
                          200 === (e = c.sent).status &&
                            ((t = e.data.newslist[0]),
                            (a = t.news),
                            (r = t.desc),
                            n.setState({ newsList: a, virusDesc: r, caseList: e.data.newslist[0].case })),
                          (c.next = 6),
                          m.a.awrap(
                            y()({ method: 'get', url: 'http://api.tianapi.com/txapi/ncovcity/index?key='.concat(x) })
                          )
                        )
                      case 6:
                        ;(i = c.sent),
                          (o = i.data.newslist),
                          (s = _(o)),
                          n.setState({ staticList: o, mapList: s, loading: !1 }),
                          n.getRumorList()
                      case 11:
                      case 'end':
                        return c.stop()
                    }
                })
              }),
              (n.getRumorList = function() {
                var e, t
                return m.a.async(function(a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.next = 2),
                          m.a.awrap(
                            y()({ method: 'get', url: 'http://api.tianapi.com/txapi/rumour/index?key='.concat(x) })
                          )
                        )
                      case 2:
                        ;(e = a.sent), (t = e.data.newslist), n.setState({ rumorList: t })
                      case 5:
                      case 'end':
                        return a.stop()
                    }
                })
              }),
              (n.getTrendList = function() {
                var e, t, a, r, i, o, s, c, l, u, d, p
                return m.a.async(function(h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (h.next = 2),
                          m.a.awrap(y()({ method: 'get', url: 'https://lab.isaaclin.cn/nCoV/api/overall?latest=0' }))
                        )
                      case 2:
                        ;(e = h.sent),
                          (t = e.data.results),
                          (a = []),
                          (r = []),
                          (i = []),
                          (o = []),
                          (s = []),
                          (c = []),
                          (l = []),
                          (u = []),
                          (d = []),
                          (p = []),
                          t.forEach(function(e) {
                            a.push(k()(e.updateTime).format('MM-DD')),
                              r.push(e.confirmedCount),
                              i.push(e.suspectedCount),
                              o.push(e.deadCount),
                              s.push(e.curedCount)
                          }),
                          a.reverse().forEach(function(e, t) {
                            e !== a[t + 1] && (c.push(e), l.push(r[t]), u.push(i[t]), d.push(o[t]), p.push(s[t]))
                          }),
                          n.setState({
                            dateList: c,
                            confirmedTrendList: l.reverse(),
                            suspectedTrendList: u.reverse(),
                            deadTrendList: d.reverse(),
                            curedTrendList: p.reverse(),
                            trendLoading: !1
                          })
                      case 17:
                      case 'end':
                        return h.stop()
                    }
                })
              }),
              (n.toProvince = function(e) {
                var t,
                  a = n.state.staticList,
                  r = [],
                  i = !0,
                  o = !1,
                  s = void 0
                try {
                  for (var c, l = a[Symbol.iterator](); !(i = (c = l.next()).done); i = !0) {
                    var u = c.value
                    if (e === u.provinceShortName) {
                      ;(r = u.cities), (t = u.provinceName)
                      break
                    }
                  }
                } catch (d) {
                  ;(o = !0), (s = d)
                } finally {
                  try {
                    i || null == l.return || l.return()
                  } finally {
                    if (o) throw s
                  }
                }
                if (0 !== r.length) {
                  var m = w(r, t)
                  n.setState({ provinceName: e, mapList: m })
                }
              }),
              (n.toCountry = function() {
                var e = _(n.state.staticList)
                n.setState({ provinceName: '', mapList: e })
              }),
              (n.state = {
                timer: null,
                newsList: [],
                caseList: [],
                virusDesc: {
                  confirmedCount: 0,
                  suspectedCount: 0,
                  deadCount: 0,
                  curedCount: 0,
                  seriousCount: 0,
                  modifyTime: 0,
                  virus: '',
                  infectSource: '',
                  passWay: '',
                  remark1: '',
                  remark2: '',
                  confirmedIncr: 0,
                  suspectedIncr: 0,
                  deadIncr: 0,
                  curedIncr: 0,
                  seriousIncr: 0
                },
                staticList: [],
                mapList: [],
                rumorList: [],
                provinceName: '',
                tabIndex: 0,
                dateList: [],
                confirmedTrendList: [],
                suspectedTrendList: [],
                deadTrendList: [],
                curedTrendList: [],
                loading: !0,
                trendLoading: !0
              }),
              n
            )
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this
                  this.initData(),
                    this.setState({
                      timer: setInterval(function() {
                        e.initData()
                      }, 6e5)
                    })
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  var e = this.state.timer
                  clearInterval(e), this.setState({ timer: null })
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.state,
                    n = t.virusDesc,
                    r = t.mapList,
                    i = t.provinceName,
                    o = t.tabIndex,
                    u = t.newsList,
                    m = t.rumorList,
                    d = t.dateList,
                    p = t.confirmedTrendList,
                    h = t.suspectedTrendList,
                    f = t.deadTrendList,
                    g = t.curedTrendList,
                    v = t.loading,
                    y = t.trendLoading,
                    x = [
                      { title: '\u5730\u533a', dataIndex: 'name', key: 'name' },
                      { title: '\u786e\u8bca', dataIndex: 'confirmedCount', key: 'confirmedCount' },
                      { title: '\u6b7b\u4ea1', dataIndex: 'deadCount', key: 'deadCount' },
                      { title: '\u6cbb\u6108', dataIndex: 'curedCount', key: 'curedCount' }
                    ]
                  return a.createElement(
                    s.a,
                    { loading: v, active: !0, paragraph: { rows: 50 } },
                    a.createElement(
                      'div',
                      null,
                      a.createElement(
                        'div',
                        { className: ne.a.top },
                        a.createElement(
                          'p',
                          { className: ne.a.title },
                          '\u65b0\u578b\u51a0\u72b6\u75c5\u6bd2\u80ba\u708e\u75ab\u60c5'
                        ),
                        a.createElement('p', { className: ne.a.tip }, '\u5b9e\u65f6\u52a8\u6001')
                      ),
                      a.createElement(
                        L.a,
                        {
                          tabs: [
                            { title: '\u75ab\u60c5\u5730\u56fe' },
                            { title: '\u75ab\u60c5\u8d8b\u52bf' },
                            { title: '\u6700\u65b0\u6d88\u606f' },
                            { title: '\u8f9f\u8c23\u4fe1\u606f' }
                          ],
                          initialPage: 0,
                          swipeable: !1,
                          tabBarInactiveTextColor: '#616161',
                          tabBarActiveTextColor: '#6C63FF',
                          tabBarUnderlineStyle: { border: '1px #6C63FF solid' },
                          onChange: function(t, n) {
                            e.setState({ tabIndex: n }), 1 === n && e.getTrendList()
                          }
                        },
                        a.createElement(
                          'div',
                          { className: ne.a.map },
                          a.createElement('span', { className: ne.a.allCountry }, '\u5168\u56fd'),
                          a.createElement(
                            'span',
                            null,
                            '\u622a\u81f3',
                            k()(n.modifyTime).format('YYYY\u5e74MM\u6708DD\u65e5 HH:mm'),
                            '(\u5317\u4eac\u65f6\u95f4)'
                          ),
                          a.createElement('span', null, '\u7edf\u8ba1'),
                          a.createElement(
                            'div',
                            { className: ne.a.category },
                            a.createElement(R, {
                              title: '\u786e\u8bca',
                              count: n.confirmedCount,
                              addcount: n.confirmedIncr,
                              color: '#e57471'
                            }),
                            a.createElement(R, {
                              title: '\u7591\u4f3c',
                              count: n.suspectedCount,
                              addcount: n.suspectedIncr,
                              color: '#dda451'
                            }),
                            a.createElement(R, {
                              title: '\u91cd\u75c7',
                              count: n.seriousCount,
                              addcount: n.seriousIncr,
                              color: '#5d4037'
                            }),
                            a.createElement(R, {
                              title: '\u6b7b\u4ea1',
                              count: n.deadCount,
                              addcount: n.deadIncr,
                              color: '#919399'
                            }),
                            a.createElement(R, {
                              title: '\u6cbb\u6108',
                              count: n.curedCount,
                              addcount: n.curedIncr,
                              color: '#7ebe50'
                            })
                          ),
                          a.createElement(
                            j.a,
                            null,
                            a.createElement(
                              j.a.Body,
                              { className: ne.a.card },
                              a.createElement(
                                'div',
                                null,
                                a.createElement('span', null, '\u75c5\u6bd2\uff1a'),
                                n.virus
                              ),
                              a.createElement(
                                'div',
                                null,
                                a.createElement('span', null, '\u4f20\u67d3\u6e90\uff1a'),
                                n.infectSource
                              ),
                              a.createElement('div', null, n.remark1),
                              a.createElement('div', null, n.remark2),
                              a.createElement(
                                'div',
                                null,
                                a.createElement('span', null, '\u4f20\u64ad\u9014\u5f84\uff1a'),
                                n.passWay
                              )
                            )
                          ),
                          a.createElement(M, { provinceName: i, mapList: r, onClick: this.toProvince }),
                          i
                            ? a.createElement(
                                'div',
                                { className: ne.a.maptip, onClick: this.toCountry },
                                '\u8fd4\u56de\u5168\u56fd'
                              )
                            : null
                        ),
                        a.createElement(
                          'div',
                          { className: ne.a.trendBox },
                          a.createElement(
                            s.a,
                            { loading: y, active: !0, paragraph: { rows: 15 } },
                            a.createElement(ee, {
                              dateList: d,
                              firstList: p,
                              secondList: h,
                              firstColor: '#e57471',
                              secondColor: '#dda451',
                              legendData: ['\u786e\u8bca\u4eba\u6570', '\u7591\u4f3c\u4eba\u6570']
                            }),
                            a.createElement(c.a, null),
                            a.createElement(ee, {
                              dateList: d,
                              firstList: f,
                              secondList: g,
                              firstColor: '#919399',
                              secondColor: '#7ebe50',
                              legendData: ['\u6b7b\u4ea1\u4eba\u6570', '\u6cbb\u6108\u4eba\u6570']
                            }),
                            a.createElement(c.a, null),
                            a.createElement(G, { virusDesc: n })
                          )
                        ),
                        a.createElement('div', { className: ne.a.newsBox }, a.createElement(P, { newlist: u })),
                        a.createElement('div', { className: ne.a.rumorBox }, a.createElement($, { rumorList: m }))
                      ),
                      0 === o
                        ? a.createElement(l.a, {
                            className: ne.a.table,
                            columns: x,
                            pagination: !1,
                            expandedRowRender: function(e) {
                              return (function(e) {
                                var t = []
                                return (
                                  e.provinceName && (t = w(e.cities, e.provinceName)),
                                  t.length > 0
                                    ? a.createElement(l.a, {
                                        columns: x,
                                        showHeader: !1,
                                        rowKey: function(e) {
                                          return e.name
                                        },
                                        dataSource: t,
                                        pagination: !1
                                      })
                                    : null
                                )
                              })(e)
                            },
                            dataSource: r,
                            rowKey: function(e) {
                              return e.name
                            }
                          })
                        : null
                    ),
                    0 === o
                      ? a.createElement(
                          'div',
                          { className: ne.a.footer },
                          a.createElement('p', null, '\u6b66\u6c49\u52a0\u6cb9\u5440~'),
                          a.createElement(
                            'a',
                            { href: 'http://www.beian.miit.gov.cn/', target: 'view_window' },
                            '\u6e1dICP\u590717013916\u53f7'
                          ),
                          a.createElement('a', { href: 'https://github.com/xieyezi', target: 'view_window' }, 'Github')
                        )
                      : null
                  )
                }
              }
            ]),
            t
          )
        })(a.Component),
        re = function() {
          return r.a.createElement('div', { className: 'App' }, r.a.createElement(ae, null))
        }
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      )
      n(792)
      o.a.render(r.a.createElement(re, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister()
          })
    }
  },
  [[428, 1, 2]]
])
