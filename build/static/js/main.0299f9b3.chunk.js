;(this['webpackJsonpwuhan-virus'] = this['webpackJsonpwuhan-virus'] || []).push([
  [0],
  {
    141: function(e, t, n) {
      e.exports = {
        newsitem: 'style_newsitem__3GDJz',
        newscontent: 'style_newscontent__Fq2J7',
        footer: 'style_footer__3a63a',
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
      e.exports = n(993)
    },
    433: function(e, t, n) {},
    434: function(e, t, n) {},
    50: function(e, t, n) {
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
        trend: 'style_trend__2qaQN',
        rumorBox: 'style_rumorBox__2u0wc'
      }
    },
    993: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        r = n.n(a),
        i = n(11),
        o = n.n(i),
        s = (n(433), n(434), n(435), n(269)),
        c = (n(437), n(267)),
        l = (n(995), n(268)),
        u = n(56),
        d = n.n(u),
        m = n(180),
        p = n(181),
        f = n(185),
        h = n(182),
        v = n(186),
        g = n(104),
        y = n.n(g),
        x = '964dc226dd5b57e892e6199735b6c55f'
      function E(e) {
        return y()({ method: 'get', url: '../map/province/'.concat(e, '.json') })
      }
      var _ = n(189)
      function w(e) {
        var t = []
        return (
          e.forEach(function(e) {
            var n = Object(_.a)({ name: e.provinceShortName, value: e.confirmedCount }, e)
            t.push(n)
          }),
          t
        )
      }
      function b(e, t) {
        var n = []
        return (
          t.includes('\u7701') || t.includes('\u81ea\u6cbb\u533a')
            ? e.forEach(function(e) {
                var t = Object(_.a)({ name: e.cityName + '\u5e02', value: e.confirmedCount }, e)
                n.push(t)
              })
            : e.forEach(function(e) {
                var t = Object(_.a)({ name: e.cityName, value: e.confirmedCount }, e)
                n.push(t)
              }),
          n
        )
      }
      var C = n(264),
        L = n.n(C),
        N = n(419),
        k = n.n(N),
        S = (n(512), n(516), n(138)),
        j = n.n(S),
        D = n(121),
        I = n.n(D),
        T = n(15),
        O = n.n(T),
        B =
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
        M = n.n(z),
        H = (function(e) {
          function t(e) {
            var n
            return (
              Object(m.a)(this, t),
              ((n = Object(f.a)(this, Object(h.a)(t).call(this, e))).getOption = function() {
                var e = n.props,
                  t = e.provinceName,
                  a = e.mapList,
                  r = t ? B[t] : ''
                return {
                  tooltip: {
                    show: !0,
                    formatter: function(e) {
                      return (
                        e.name +
                        '\uff1a<br>\u786e\u8bca\uff1a' +
                        e.data.value +
                        '\u4f8b<br>\u6b7b\u4ea1\uff1a' +
                        e.data.deadCount +
                        '\u4f8b<br>\u6cbb\u6108\uff1a' +
                        e.data.curedCount +
                        '\u4f8b'
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
                      silent: !!r,
                      label: { show: !0, position: 'inside', fontSize: 6 },
                      mapType: r || 'china',
                      data: a,
                      zoom: 1.2,
                      roam: !1,
                      showLegendSymbol: !1,
                      emphasis: {},
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
            Object(v.a)(t, e),
            Object(p.a)(
              t,
              [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props.onClick
                    return a.createElement(I.a, {
                      className: M.a.mapbox,
                      style: { height: '400px' },
                      echarts: O.a,
                      option: this.getOption(),
                      notMerge: !0,
                      lazyUpdate: !0,
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
                    var t, n, a, r
                    return d.a.async(function(i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            if (((t = e.provinceName), '' !== (t || ''))) {
                              i.next = 9
                              break
                            }
                            return (i.next = 5), d.a.awrap(y()({ method: 'get', url: '../map/china.json' }))
                          case 5:
                            ;(n = i.sent), O.a.registerMap('china', n.data), (i.next = 14)
                            break
                          case 9:
                            return (a = B[t]), (i.next = 12), d.a.awrap(E(a))
                          case 12:
                            ;(r = i.sent), O.a.registerMap(a, r.data)
                          case 14:
                          case 'end':
                            return i.stop()
                        }
                    })
                  }
                }
              ]
            ),
            t
          )
        })(a.Component),
        U = (n(624), n(270)),
        W = (n(418), n(184)),
        Y = n(141),
        F = n.n(Y),
        J = function(e) {
          return a.createElement(
            'div',
            { className: F.a.newsitem },
            a.createElement(
              'p',
              null,
              j()(e.news.pubDate).format('YYYY\u5e74MM\u6708DD\u65e5 HH:mm'),
              ' (',
              e.news.pubDateStr,
              ')'
            ),
            a.createElement(
              W.a,
              { title: e.news.title },
              a.createElement('p', { className: F.a.newscontent }, e.news.summary),
              a.createElement(
                'div',
                { className: F.a.footer },
                a.createElement('p', null, '\u5730\u533a:', e.news.provinceName),
                a.createElement(
                  'p',
                  {
                    onClick: function() {
                      return A(e.news.sourceUrl)
                    }
                  },
                  '\u6765\u6e90:',
                  a.createElement('span', { className: F.a.origin }, e.news.infoSource)
                )
              )
            )
          )
        },
        A = function(e) {
          window.open('about:blank').location.href = e
        },
        P = function(e) {
          var t = e.newlist
          return a.createElement(
            U.a,
            null,
            t.map(function(e, t) {
              return a.createElement(U.a.Item, { key: t }, a.createElement(J, { news: e }))
            })
          )
        },
        R = n(187),
        q = n.n(R),
        V = function(e) {
          var t = e.title,
            n = e.count,
            r = e.addcount,
            i = e.color
          return a.createElement(
            'div',
            { style: { color: i }, className: q.a.category },
            a.createElement('p', null, t),
            a.createElement('p', null, n, '\u4f8b'),
            a.createElement(
              'p',
              null,
              a.createElement('span', { className: q.a.tip }, '\u8f83\u6628\u65e5'),
              a.createElement('span', { className: q.a.add }, '+', r)
            )
          )
        },
        Q =
          (n(641),
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
            a.createElement(I.a, { echarts: O.a, option: Q(n), notMerge: !0, lazyUpdate: !0 })
          )
        },
        K = (n(654), n(423)),
        X = n(142),
        $ = n.n(X),
        Z = function(e) {
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
                  { className: $.a.cardbox, key: e.id },
                  a.createElement(
                    W.a,
                    {
                      className: $.a.card,
                      cover: a.createElement('img', {
                        alt: '\u56fe\u7247',
                        style: { borderRadius: '20px 20px 0px 0px', opacity: 0.8, height: 200 },
                        src: e.imgsrc
                      })
                    },
                    a.createElement('img', { src: t, alt: '', className: $.a.tip }),
                    a.createElement(
                      'div',
                      null,
                      a.createElement('p', { className: $.a.title }, e.title),
                      a.createElement('p', null, e.desc)
                    )
                  )
                )
              )
            })
          )
        },
        ee =
          (n(667),
          n(687),
          n(688),
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
        te = function(e) {
          var t = e.dateList,
            n = e.firstList,
            r = e.secondList,
            i = e.legendData,
            o = e.firstColor,
            s = e.secondColor
          return a.createElement(I.a, { echarts: O.a, option: ee(t, n, r, i, o, s), notMerge: !0, lazyUpdate: !0 })
        },
        ne = n(50),
        ae = n.n(ne),
        re = (function(e) {
          function t(e) {
            var n
            return (
              Object(m.a)(this, t),
              ((n = Object(f.a)(this, Object(h.a)(t).call(this, e))).initData = function() {
                var e, t, a, r, i, o, s
                return d.a.async(function(c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (c.next = 2),
                          d.a.awrap(
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
                          d.a.awrap(
                            y()({ method: 'get', url: 'http://api.tianapi.com/txapi/ncovcity/index?key='.concat(x) })
                          )
                        )
                      case 6:
                        ;(i = c.sent),
                          (o = i.data.newslist),
                          (s = w(o)),
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
                return d.a.async(function(a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.next = 2),
                          d.a.awrap(
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
                var e, t, a, r, i, o, s, c, l, u, m, p
                return d.a.async(function(f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        return (
                          (f.next = 2),
                          d.a.awrap(y()({ method: 'get', url: 'https://lab.isaaclin.cn/nCoV/api/overall?latest=0' }))
                        )
                      case 2:
                        ;(e = f.sent),
                          (t = e.data.results),
                          (a = []),
                          (r = []),
                          (i = []),
                          (o = []),
                          (s = []),
                          (c = []),
                          (l = []),
                          (u = []),
                          (m = []),
                          (p = []),
                          t.forEach(function(e) {
                            a.push(j()(e.updateTime).format('MM-DD')),
                              r.push(e.confirmedCount),
                              i.push(e.suspectedCount),
                              o.push(e.deadCount),
                              s.push(e.curedCount)
                          }),
                          a.reverse().forEach(function(e, t) {
                            e !== a[t + 1] && (c.push(e), l.push(r[t]), u.push(i[t]), m.push(o[t]), p.push(s[t]))
                          }),
                          n.setState({
                            dateList: c,
                            confirmedTrendList: l.reverse(),
                            suspectedTrendList: u.reverse(),
                            deadTrendList: m.reverse(),
                            curedTrendList: p.reverse(),
                            trendLoading: !1
                          })
                      case 17:
                      case 'end':
                        return f.stop()
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
                } catch (m) {
                  ;(o = !0), (s = m)
                } finally {
                  try {
                    i || null == l.return || l.return()
                  } finally {
                    if (o) throw s
                  }
                }
                if (0 !== r.length) {
                  var d = b(r, t)
                  n.setState({ provinceName: e, mapList: d })
                }
              }),
              (n.toCountry = function() {
                var e = w(n.state.staticList)
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
            Object(v.a)(t, e),
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
                    d = t.rumorList,
                    m = t.dateList,
                    p = t.confirmedTrendList,
                    f = t.suspectedTrendList,
                    h = t.deadTrendList,
                    v = t.curedTrendList,
                    g = t.loading,
                    y = t.trendLoading,
                    x = [
                      { title: '\u5730\u533a', dataIndex: 'name', key: 'name' },
                      { title: '\u786e\u8bca', dataIndex: 'confirmedCount', key: 'confirmedCount' },
                      { title: '\u6b7b\u4ea1', dataIndex: 'deadCount', key: 'deadCount' },
                      { title: '\u6cbb\u6108', dataIndex: 'curedCount', key: 'curedCount' }
                    ]
                  return a.createElement(
                    s.a,
                    { loading: g, active: !0, paragraph: { rows: 50 } },
                    a.createElement(
                      'div',
                      null,
                      a.createElement(
                        'div',
                        { className: ae.a.top },
                        a.createElement(
                          'p',
                          { className: ae.a.title },
                          '\u65b0\u578b\u51a0\u72b6\u75c5\u6bd2\u80ba\u708e\u75ab\u60c5'
                        ),
                        a.createElement('p', { className: ae.a.tip }, '\u5b9e\u65f6\u52a8\u6001')
                      ),
                      a.createElement(
                        k.a,
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
                            1 === n && e.getTrendList(), e.setState({ tabIndex: n })
                          }
                        },
                        a.createElement(
                          'div',
                          { className: ae.a.map },
                          a.createElement('span', { className: ae.a.allCountry }, '\u5168\u56fd'),
                          a.createElement(
                            'span',
                            null,
                            '\u622a\u81f3',
                            j()(n.modifyTime).format('YYYY\u5e74MM\u6708DD\u65e5 HH:mm'),
                            '(\u5317\u4eac\u65f6\u95f4)'
                          ),
                          a.createElement('span', null, '\u7edf\u8ba1'),
                          a.createElement(
                            'div',
                            { className: ae.a.category },
                            a.createElement(V, {
                              title: '\u786e\u8bca',
                              count: n.confirmedCount,
                              addcount: n.confirmedIncr,
                              color: '#e57471'
                            }),
                            a.createElement(V, {
                              title: '\u7591\u4f3c',
                              count: n.suspectedCount,
                              addcount: n.suspectedIncr,
                              color: '#dda451'
                            }),
                            a.createElement(V, {
                              title: '\u91cd\u75c7',
                              count: n.seriousCount,
                              addcount: n.seriousIncr,
                              color: '#5d4037'
                            }),
                            a.createElement(V, {
                              title: '\u6b7b\u4ea1',
                              count: n.deadCount,
                              addcount: n.deadIncr,
                              color: '#919399'
                            }),
                            a.createElement(V, {
                              title: '\u6cbb\u6108',
                              count: n.curedCount,
                              addcount: n.curedIncr,
                              color: '#7ebe50'
                            })
                          ),
                          a.createElement(
                            L.a,
                            null,
                            a.createElement(
                              L.a.Body,
                              { className: ae.a.card },
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
                          a.createElement(H, { provinceName: i, mapList: r, onClick: this.toProvince }),
                          i
                            ? a.createElement(
                                'div',
                                { className: ae.a.maptip, onClick: this.toCountry },
                                '\u8fd4\u56de\u5168\u56fd'
                              )
                            : null
                        ),
                        a.createElement(
                          'div',
                          { className: ae.a.trend },
                          a.createElement(
                            s.a,
                            { loading: y, active: !0, paragraph: { rows: 15 } },
                            a.createElement(te, {
                              dateList: m,
                              firstList: p,
                              secondList: f,
                              firstColor: '#e57471',
                              secondColor: '#dda451',
                              legendData: ['\u786e\u8bca\u4eba\u6570', '\u7591\u4f3c\u4eba\u6570']
                            }),
                            a.createElement(c.a, null),
                            a.createElement(te, {
                              dateList: m,
                              firstList: h,
                              secondList: v,
                              firstColor: '#919399',
                              secondColor: '#7ebe50',
                              legendData: ['\u6b7b\u4ea1\u4eba\u6570', '\u6cbb\u6108\u4eba\u6570']
                            }),
                            a.createElement(c.a, null),
                            a.createElement(G, { virusDesc: n })
                          )
                        ),
                        a.createElement('div', { className: ae.a.newsBox }, a.createElement(P, { newlist: u })),
                        a.createElement('div', { className: ae.a.rumorBox }, a.createElement(Z, { rumorList: d }))
                      ),
                      0 === o
                        ? a.createElement(l.a, {
                            className: ae.a.table,
                            columns: x,
                            pagination: !1,
                            expandedRowRender: function(e) {
                              return (function(e) {
                                var t = []
                                return (
                                  e.provinceName && (t = b(e.cities, e.provinceName)),
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
                    )
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
      n(791)
      o.a.render(r.a.createElement(ie, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister()
          })
    }
  },
  [[428, 1, 2]]
])
//# sourceMappingURL=main.0299f9b3.chunk.js.map
