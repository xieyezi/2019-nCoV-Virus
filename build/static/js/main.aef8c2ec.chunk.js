;(this['webpackJsonpwuhan-virus'] = this['webpackJsonpwuhan-virus'] || []).push([
  [0],
  {
    124: function(e, t, n) {
      e.exports = {
        newsitem: 'style_newsitem__3GDJz',
        newscontent: 'style_newscontent__Fq2J7',
        footer: 'style_footer__3a63a',
        area: 'style_area__2UXdS',
        origin: 'style_origin__2hUNY'
      }
    },
    143: function(e, t, n) {
      e.exports = {
        cardbox: 'style_cardbox__tiQww',
        card: 'style_card__WVS6y',
        image: 'style_image__2aTav',
        tip: 'style_tip__Ptp0H',
        title: 'style_title__35CVV'
      }
    },
    188: function(e, t, n) {
      e.exports = { category: 'style_category__3QUH4', add: 'style_add__xqv3y', tip: 'style_tip__BaCAO' }
    },
    423: function(e, t, n) {
      e.exports = { mapbox: 'style_mapbox___c_Dz' }
    },
    429: function(e, t, n) {
      e.exports = n(991)
    },
    434: function(e, t, n) {},
    435: function(e, t, n) {},
    56: function(e, t, n) {
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
    621: function(e, t, n) {
      var a = {
        './anhui.json': [994, 3],
        './aomen.json': [995, 4],
        './beijing.json': [996, 5],
        './chongqing.json': [997, 6],
        './fujian.json': [998, 7],
        './gansu.json': [999, 8],
        './guangdong.json': [1e3, 9],
        './guangxi.json': [1001, 10],
        './guizhou.json': [1002, 11],
        './hainan.json': [1003, 12],
        './hebei.json': [1004, 13],
        './heilongjiang.json': [1005, 14],
        './henan.json': [1006, 15],
        './hubei.json': [1007, 16],
        './hunan.json': [1008, 17],
        './jiangsu.json': [1009, 18],
        './jiangxi.json': [1010, 19],
        './jilin.json': [1011, 20],
        './liaoning.json': [1012, 21],
        './neimenggu.json': [1013, 22],
        './ningxia.json': [1014, 23],
        './qinghai.json': [1015, 24],
        './shandong.json': [1016, 25],
        './shanghai.json': [1017, 26],
        './shanxi.json': [1018, 27],
        './shanxi1.json': [1019, 28],
        './sichuan.json': [1020, 29],
        './taiwan.json': [1021, 30],
        './tianjin.json': [1022, 31],
        './xianggang.json': [1023, 32],
        './xinjiang.json': [1024, 33],
        './xizang.json': [1025, 34],
        './yunnan.json': [1026, 35],
        './zhejiang.json': [1027, 36]
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
        (r.id = 621),
        (e.exports = r)
    },
    991: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        r = n.n(a),
        i = n(10),
        o = n.n(i),
        s = (n(434), n(435), n(436), n(269)),
        c = (n(438), n(190)),
        l = (n(993), n(268)),
        u = n(43),
        m = n.n(u),
        d = n(181),
        p = n(182),
        h = n(186),
        f = n(183),
        g = n(187),
        v = (n(273), n(84)),
        y = n(105),
        x = n.n(y),
        w = '964dc226dd5b57e892e6199735b6c55f'
      function _() {
        return x()({
          method: 'get',
          url: 'https://raw.githubusercontent.com/huanent/vue-echarts-map-demo/master/map/china.json'
        })
      }
      var b = n(191)
      function E(e) {
        var t = []
        return (
          e.forEach(function(e) {
            var n = Object(b.a)({ name: e.provinceShortName, value: e.confirmedCount }, e)
            t.push(n)
          }),
          t
        )
      }
      function j(e, t) {
        var n = []
        return (
          t.includes('\u7701') || t.includes('\u81ea\u6cbb\u533a')
            ? e.forEach(function(e) {
                var t = Object(b.a)({ name: e.cityName + '\u5e02', value: e.confirmedCount }, e)
                n.push(t)
              })
            : e.forEach(function(e) {
                var t = Object(b.a)({ name: e.cityName, value: e.confirmedCount }, e)
                n.push(t)
              }),
          n
        )
      }
      var L = n(421),
        C = n.n(L),
        N = (n(510), n(140)),
        k = n.n(N),
        S = n(122),
        D = n.n(S),
        I = n(13),
        T = n.n(I),
        O =
          (n(582),
          n(605),
          n(229),
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
            陕西: 'shanxi1',
            四川: 'sichuan',
            台湾: 'taiwan',
            天津: 'tianjin',
            香港: 'xianggang',
            新疆: 'xinjiang',
            西藏: 'xizang',
            云南: 'yunnan',
            浙江: 'zhejiang'
          }),
        z = n(423),
        B = n.n(z),
        M = (function(e) {
          function t(e) {
            var n
            return (
              Object(d.a)(this, t),
              ((n = Object(h.a)(this, Object(f.a)(t).call(this, e))).echarts_react = void 0),
              (n.getOption = function() {
                var e = n.state,
                  t = e.province
                return {
                  tooltip: {
                    show: !0,
                    formatter: function(e) {
                      var t = ''
                      return (
                        e.data &&
                          (t =
                            e.name +
                            '\uff1a<br>\u786e\u8bca\uff1a' +
                            e.data.value +
                            '\u4f8b<br>\u6b7b\u4ea1\uff1a' +
                            e.data.deadCount +
                            '\u4f8b<br>\u6cbb\u6108\uff1a' +
                            e.data.curedCount +
                            '\u4f8b'),
                        t
                      )
                    }
                  },
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
                      mapType: t || 'china',
                      data: e.mapList,
                      zoom: t ? 1.1 : 1.2,
                      roam: !1,
                      showLegendSymbol: !1,
                      rippleEffect: { show: !0, brushType: 'stroke', scale: 2.5, period: 4 }
                    }
                  ]
                }
              }),
              (n.echarts_react = a.createRef()),
              (n.state = { province: '', mapList: [] }),
              n
            )
          }
          return (
            Object(g.a)(t, e),
            Object(p.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e, t, n, a, r
                  return m.a.async(
                    function(i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (
                              (e = this.props),
                              (t = e.provinceName),
                              (n = e.mapList),
                              (a = t ? O[t] : ''),
                              (i.next = 4),
                              m.a.awrap(_())
                            )
                          case 4:
                            ;(r = i.sent), T.a.registerMap('china', r.data), this.setState({ province: a, mapList: n })
                          case 7:
                          case 'end':
                            return i.stop()
                        }
                    },
                    null,
                    this
                  )
                }
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function(e) {
                  var t, a, r, i, o, s
                  return m.a.async(
                    function(c) {
                      for (;;)
                        switch ((c.prev = c.next)) {
                          case 0:
                            if (((t = e.provinceName), (a = e.mapList), '' !== (r = t ? O[t] : ''))) {
                              c.next = 9
                              break
                            }
                            return (c.next = 5), m.a.awrap(_())
                          case 5:
                            ;(i = c.sent), T.a.registerMap('china', i.data), (c.next = 20)
                            break
                          case 9:
                            if ('shanxi1' !== r) {
                              c.next = 16
                              break
                            }
                            return (c.next = 12), m.a.awrap(n(621)('./'.concat(r, '.json')))
                          case 12:
                            ;(o = c.sent), T.a.registerMap(r, o.default), (c.next = 20)
                            break
                          case 16:
                            return (
                              (c.next = 18),
                              m.a.awrap(
                                ((l = r),
                                x()({
                                  method: 'get',
                                  url: 'https://raw.githubusercontent.com/huanent/vue-echarts-map-demo/master/map/province/'.concat(
                                    l,
                                    '.json'
                                  )
                                }))
                              )
                            )
                          case 18:
                            ;(s = c.sent), T.a.registerMap(r, s.data)
                          case 20:
                            this.setState({ province: r, mapList: a })
                          case 21:
                          case 'end':
                            return c.stop()
                        }
                      var l
                    },
                    null,
                    this
                  )
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  console.log('\u5378\u8f7d....')
                }
              },
              {
                key: 'render',
                value: function() {
                  return a.createElement(D.a, {
                    className: B.a.mapbox,
                    style: { height: '400px' },
                    echarts: T.a,
                    option: this.getOption(),
                    notMerge: !0,
                    lazyUpdate: !0
                  })
                }
              }
            ]),
            t
          )
        })(a.Component),
        U = (n(622), n(270)),
        H = (n(420), n(185)),
        F = n(124),
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
        R = n(188),
        A = n.n(R),
        J = function(e) {
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
          (n(639),
          n(355),
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
        K = (n(652), n(425)),
        Q = n(143),
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
          (n(665),
          n(685),
          n(686),
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
        te = n(56),
        ne = n.n(te),
        ae = v.a.Option,
        re = (function(e) {
          function t(e) {
            var n
            return (
              Object(d.a)(this, t),
              ((n = Object(h.a)(this, Object(f.a)(t).call(this, e))).initData = function() {
                var e, t, a, r, i, o, s, c
                return m.a.async(function(l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (l.next = 2),
                          m.a.awrap(
                            x()({ method: 'get', url: 'http://api.tianapi.com/txapi/ncov/index?key='.concat(w) })
                          )
                        )
                      case 2:
                        return (
                          200 === (e = l.sent).status &&
                            ((t = e.data.newslist[0]),
                            (a = t.news),
                            (r = t.desc),
                            n.setState({ newsList: a, virusDesc: r, caseList: e.data.newslist[0].case })),
                          (l.next = 6),
                          m.a.awrap(
                            x()({ method: 'get', url: 'http://api.tianapi.com/txapi/ncovcity/index?key='.concat(w) })
                          )
                        )
                      case 6:
                        ;(i = l.sent),
                          (o = i.data.newslist),
                          (s = E(o)),
                          (c = []).push('\u5168\u56fd'),
                          s.forEach(function(e) {
                            c.push(e.provinceShortName)
                          }),
                          n.setState({ staticList: o, mapList: s, provinceList: c, loading: !1 }),
                          n.getRumorList()
                      case 14:
                      case 'end':
                        return l.stop()
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
                            x()({ method: 'get', url: 'http://api.tianapi.com/txapi/rumour/index?key='.concat(w) })
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
                          m.a.awrap(x()({ method: 'get', url: 'https://lab.isaaclin.cn/nCoV/api/overall?latest=0' }))
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
                } catch (p) {
                  ;(o = !0), (s = p)
                } finally {
                  try {
                    i || null == l.return || l.return()
                  } finally {
                    if (o) throw s
                  }
                }
                if (0 !== r.length) {
                  var m = j(r, t)
                  n.setState({ provinceName: e, mapList: m })
                } else {
                  var d = E(a)
                  n.setState({ provinceName: '', mapList: d })
                }
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
                  note1: '',
                  note2: '',
                  note3: '',
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
                provinceList: [],
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
                    y = t.provinceList,
                    x = t.loading,
                    w = t.trendLoading,
                    _ = [
                      { title: '\u5730\u533a', dataIndex: 'name', key: 'name' },
                      { title: '\u786e\u8bca', dataIndex: 'confirmedCount', key: 'confirmedCount' },
                      { title: '\u6b7b\u4ea1', dataIndex: 'deadCount', key: 'deadCount' },
                      { title: '\u6cbb\u6108', dataIndex: 'curedCount', key: 'curedCount' }
                    ]
                  return a.createElement(
                    s.a,
                    { loading: x, active: !0, paragraph: { rows: 50 } },
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
                        C.a,
                        {
                          tabs: [
                            { title: '\u75ab\u60c5\u5730\u56fe' },
                            { title: '\u6700\u65b0\u6d88\u606f' },
                            { title: '\u8f9f\u8c23\u4fe1\u606f' },
                            { title: '\u75ab\u60c5\u8d8b\u52bf' }
                          ],
                          initialPage: 0,
                          swipeable: !1,
                          tabBarInactiveTextColor: '#616161',
                          tabBarActiveTextColor: '#6C63FF',
                          tabBarUnderlineStyle: { border: '1px #6C63FF solid' },
                          onChange: function(t, n) {
                            e.setState({ tabIndex: n }), 3 === n && e.getTrendList()
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
                            a.createElement(J, {
                              title: '\u786e\u8bca',
                              count: n.confirmedCount,
                              addcount: n.confirmedIncr,
                              color: '#e57471'
                            }),
                            a.createElement(J, {
                              title: '\u7591\u4f3c',
                              count: n.suspectedCount,
                              addcount: n.suspectedIncr,
                              color: '#dda451'
                            }),
                            a.createElement(J, {
                              title: '\u91cd\u75c7',
                              count: n.seriousCount,
                              addcount: n.seriousIncr,
                              color: '#5d4037'
                            }),
                            a.createElement(J, {
                              title: '\u6b7b\u4ea1',
                              count: n.deadCount,
                              addcount: n.deadIncr,
                              color: '#919399'
                            }),
                            a.createElement(J, {
                              title: '\u6cbb\u6108',
                              count: n.curedCount,
                              addcount: n.curedIncr,
                              color: '#7ebe50'
                            })
                          ),
                          a.createElement(c.a, null),
                          a.createElement(
                            'div',
                            null,
                            a.createElement(
                              'p',
                              null,
                              '\u5404\u7701\u6700\u65b0\u75ab\u60c5\u67e5\u8be2\uff08\u70b9\u51fb\u9009\u62e9\u5177\u4f53\u7701\u4efd\uff09\uff1a'
                            ),
                            a.createElement(
                              v.a,
                              { defaultValue: '\u5168\u56fd', style: { width: '90%' }, onChange: this.toProvince },
                              y.map(function(e, t) {
                                return a.createElement(ae, { value: e, key: t }, e)
                              })
                            )
                          ),
                          r.length > 0 ? a.createElement(M, { provinceName: i, mapList: r }) : null
                        ),
                        a.createElement('div', { className: ne.a.newsBox }, a.createElement(P, { newlist: u })),
                        a.createElement('div', { className: ne.a.rumorBox }, a.createElement($, { rumorList: m })),
                        a.createElement(
                          'div',
                          { className: ne.a.trendBox },
                          a.createElement(
                            s.a,
                            { loading: w, active: !0, paragraph: { rows: 15 } },
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
                        )
                      ),
                      0 === o
                        ? a.createElement(l.a, {
                            className: ne.a.table,
                            columns: _,
                            pagination: !1,
                            expandedRowRender: function(e) {
                              return (function(e) {
                                var t = []
                                return (
                                  e.provinceName && (t = j(e.cities, e.provinceName)),
                                  t.length > 0
                                    ? a.createElement(l.a, {
                                        columns: _,
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
        ie = function() {
          return r.a.createElement('div', { className: 'App' }, r.a.createElement(re, null))
        }
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      )
      n(789)
      o.a.render(r.a.createElement(ie, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister()
          })
    }
  },
  [[429, 1, 2]]
])
