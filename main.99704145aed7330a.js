(self.webpackChunkmy_portfolio = self.webpackChunkmy_portfolio || []).push([
  [179],
  {
    8834: (qt, st, ae) => {
      'use strict';
      ae.d(st, { c: () => pe });
      var N = ae(5730),
        ze = ae(3457);
      let je;
      const ke = (k) => k.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
        Ke = (k) => {
          if (void 0 === je) {
            const ne = void 0 !== k.style.webkitAnimationName;
            je = void 0 === k.style.animationName && ne ? '-webkit-' : '';
          }
          return je;
        },
        W = (k, E, ne) => {
          const ge = E.startsWith('animation') ? Ke(k) : '';
          k.style.setProperty(ge + E, ne);
        },
        Ie = (k, E) => {
          const ne = E.startsWith('animation') ? Ke(k) : '';
          k.style.removeProperty(ne + E);
        },
        Ue = [],
        le = (k = [], E) => {
          if (void 0 !== E) {
            const ne = Array.isArray(E) ? E : [E];
            return [...k, ...ne];
          }
          return k;
        },
        pe = (k) => {
          let E,
            ne,
            ge,
            be,
            _e,
            Me,
            re,
            T,
            O,
            q,
            z,
            Re,
            K,
            S = [],
            j = [],
            oe = [],
            ue = !1,
            H = {},
            R = [],
            Z = [],
            Te = {},
            xe = 0,
            Qe = !1,
            $ = !1,
            x = !0,
            M = !1,
            ee = !0,
            Ze = !1;
          const pt = k,
            ut = [],
            mt = [],
            G = [],
            St = [],
            ir = [],
            In = [],
            lo = [],
            Sn = [],
            bs = [],
            nn = [],
            fi = 'function' == typeof AnimationEffect || (void 0 !== ze.w && 'function' == typeof ze.w.AnimationEffect),
            Jt = 'function' == typeof Element && 'function' == typeof Element.prototype.animate && fi,
            hi = () => nn,
            uo = (m, v) => ((v?.oneTimeCallback ? mt : ut).push({ c: m, o: v }), K),
            pi = () => {
              if (Jt)
                nn.forEach((m) => {
                  m.cancel();
                }),
                  (nn.length = 0);
              else {
                const m = G.slice();
                (0, N.r)(() => {
                  m.forEach((v) => {
                    Ie(v, 'animation-name'),
                      Ie(v, 'animation-duration'),
                      Ie(v, 'animation-timing-function'),
                      Ie(v, 'animation-iteration-count'),
                      Ie(v, 'animation-delay'),
                      Ie(v, 'animation-play-state'),
                      Ie(v, 'animation-fill-mode'),
                      Ie(v, 'animation-direction');
                  });
                });
              }
            },
            hn = () => {
              ir.forEach((m) => {
                m?.parentNode && m.parentNode.removeChild(m);
              }),
                (ir.length = 0);
            },
            Dr = () => (void 0 !== _e ? _e : re ? re.getFill() : 'both'),
            $t = () => (void 0 !== O ? O : void 0 !== Me ? Me : re ? re.getDirection() : 'normal'),
            Cr = () => (Qe ? 'linear' : void 0 !== ge ? ge : re ? re.getEasing() : 'linear'),
            Rt = () => ($ ? 0 : void 0 !== q ? q : void 0 !== ne ? ne : re ? re.getDuration() : 0),
            On = () => (void 0 !== be ? be : re ? re.getIterations() : 1),
            sr = () => (void 0 !== z ? z : void 0 !== E ? E : re ? re.getDelay() : 0),
            Wn = () => {
              0 !== xe &&
                (xe--,
                0 === xe &&
                  ((() => {
                    at(), Sn.forEach((U) => U()), bs.forEach((U) => U());
                    const m = x ? 1 : 0,
                      v = R,
                      C = Z,
                      P = Te;
                    G.forEach((U) => {
                      const me = U.classList;
                      v.forEach((Ae) => me.add(Ae)), C.forEach((Ae) => me.remove(Ae));
                      for (const Ae in P) P.hasOwnProperty(Ae) && W(U, Ae, P[Ae]);
                    }),
                      ut.forEach((U) => U.c(m, K)),
                      mt.forEach((U) => U.c(m, K)),
                      (mt.length = 0),
                      (ee = !0),
                      x && (M = !0),
                      (x = !0);
                  })(),
                  re && re.animationFinish()));
            },
            pn = (m = !0) => {
              hn();
              const v = ((k) => (
                k.forEach((E) => {
                  for (const ne in E)
                    if (E.hasOwnProperty(ne)) {
                      const ge = E[ne];
                      if ('easing' === ne) (E['animation-timing-function'] = ge), delete E[ne];
                      else {
                        const be = ke(ne);
                        be !== ne && ((E[be] = ge), delete E[ne]);
                      }
                    }
                }),
                k
              ))(S);
              G.forEach((C) => {
                if (v.length > 0) {
                  const P = ((k = []) =>
                    k
                      .map((E) => {
                        const ne = E.offset,
                          ge = [];
                        for (const be in E) E.hasOwnProperty(be) && 'offset' !== be && ge.push(`${be}: ${E[be]};`);
                        return `${100 * ne}% { ${ge.join(' ')} }`;
                      })
                      .join(' '))(v);
                  Re =
                    void 0 !== k
                      ? k
                      : ((k) => {
                          let E = Ue.indexOf(k);
                          return E < 0 && (E = Ue.push(k) - 1), `ion-animation-${E}`;
                        })(P);
                  const U = ((k, E, ne) => {
                    var ge;
                    const be = ((k) => {
                        const E = void 0 !== k.getRootNode ? k.getRootNode() : k;
                        return E.head || E;
                      })(ne),
                      _e = Ke(ne),
                      Me = be.querySelector('#' + k);
                    if (Me) return Me;
                    const S = (null !== (ge = ne.ownerDocument) && void 0 !== ge ? ge : document).createElement(
                      'style',
                    );
                    return (
                      (S.id = k),
                      (S.textContent = `@${_e}keyframes ${k} { ${E} } @${_e}keyframes ${k}-alt { ${E} }`),
                      be.appendChild(S),
                      S
                    );
                  })(Re, P, C);
                  ir.push(U),
                    W(C, 'animation-duration', `${Rt()}ms`),
                    W(C, 'animation-timing-function', Cr()),
                    W(C, 'animation-delay', `${sr()}ms`),
                    W(C, 'animation-fill-mode', Dr()),
                    W(C, 'animation-direction', $t());
                  const me = On() === 1 / 0 ? 'infinite' : On().toString();
                  W(C, 'animation-iteration-count', me),
                    W(C, 'animation-play-state', 'paused'),
                    m && W(C, 'animation-name', `${U.id}-alt`),
                    (0, N.r)(() => {
                      W(C, 'animation-name', U.id || null);
                    });
                }
              });
            },
            bi = (m = !0) => {
              (() => {
                In.forEach((P) => P()), lo.forEach((P) => P());
                const m = j,
                  v = oe,
                  C = H;
                G.forEach((P) => {
                  const U = P.classList;
                  m.forEach((me) => U.add(me)), v.forEach((me) => U.remove(me));
                  for (const me in C) C.hasOwnProperty(me) && W(P, me, C[me]);
                });
              })(),
                S.length > 0 &&
                  (Jt
                    ? (G.forEach((m) => {
                        const v = m.animate(S, {
                          id: pt,
                          delay: sr(),
                          duration: Rt(),
                          easing: Cr(),
                          iterations: On(),
                          fill: Dr(),
                          direction: $t(),
                        });
                        v.pause(), nn.push(v);
                      }),
                      nn.length > 0 &&
                        (nn[0].onfinish = () => {
                          Wn();
                        }))
                    : pn(m)),
                (ue = !0);
            },
            br = (m) => {
              if (((m = Math.min(Math.max(m, 0), 0.9999)), Jt))
                nn.forEach((v) => {
                  (v.currentTime = v.effect.getComputedTiming().delay + Rt() * m), v.pause();
                });
              else {
                const v = `-${Rt() * m}ms`;
                G.forEach((C) => {
                  S.length > 0 && (W(C, 'animation-delay', v), W(C, 'animation-play-state', 'paused'));
                });
              }
            },
            qn = (m) => {
              nn.forEach((v) => {
                v.effect.updateTiming({
                  delay: sr(),
                  duration: Rt(),
                  easing: Cr(),
                  iterations: On(),
                  fill: Dr(),
                  direction: $t(),
                });
              }),
                void 0 !== m && br(m);
            },
            Ho = (m = !0, v) => {
              (0, N.r)(() => {
                G.forEach((C) => {
                  W(C, 'animation-name', Re || null),
                    W(C, 'animation-duration', `${Rt()}ms`),
                    W(C, 'animation-timing-function', Cr()),
                    W(C, 'animation-delay', void 0 !== v ? `-${v * Rt()}ms` : `${sr()}ms`),
                    W(C, 'animation-fill-mode', Dr() || null),
                    W(C, 'animation-direction', $t() || null);
                  const P = On() === 1 / 0 ? 'infinite' : On().toString();
                  W(C, 'animation-iteration-count', P),
                    m && W(C, 'animation-name', `${Re}-alt`),
                    (0, N.r)(() => {
                      W(C, 'animation-name', Re || null);
                    });
                });
              });
            },
            en = (m = !1, v = !0, C) => (
              m &&
                St.forEach((P) => {
                  P.update(m, v, C);
                }),
              Jt ? qn(C) : Ho(v, C),
              K
            ),
            Uo = () => {
              ue &&
                (Jt
                  ? nn.forEach((m) => {
                      m.pause();
                    })
                  : G.forEach((m) => {
                      W(m, 'animation-play-state', 'paused');
                    }),
                (Ze = !0));
            },
            po = () => {
              (T = void 0), Wn();
            },
            at = () => {
              T && clearTimeout(T);
            },
            f = (m) =>
              new Promise((v) => {
                m?.sync && (($ = !0), uo(() => ($ = !1), { oneTimeCallback: !0 })),
                  ue || bi(),
                  M && (Jt ? (br(0), qn()) : Ho(), (M = !1)),
                  ee && ((xe = St.length + 1), (ee = !1)),
                  uo(() => v(), { oneTimeCallback: !0 }),
                  St.forEach((C) => {
                    C.play();
                  }),
                  Jt
                    ? (nn.forEach((m) => {
                        m.play();
                      }),
                      (0 === S.length || 0 === G.length) && Wn())
                    : (() => {
                        if (
                          (at(),
                          (0, N.r)(() => {
                            G.forEach((m) => {
                              S.length > 0 && W(m, 'animation-play-state', 'running');
                            });
                          }),
                          0 === S.length || 0 === G.length)
                        )
                          Wn();
                        else {
                          const m = sr() || 0,
                            v = Rt() || 0,
                            C = On() || 1;
                          isFinite(C) && (T = setTimeout(po, m + v * C + 100)),
                            ((k, E) => {
                              let ne;
                              const ge = { passive: !0 },
                                _e = (Me) => {
                                  k === Me.target &&
                                    (ne && ne(),
                                    at(),
                                    (0, N.r)(() => {
                                      G.forEach((m) => {
                                        Ie(m, 'animation-duration'),
                                          Ie(m, 'animation-delay'),
                                          Ie(m, 'animation-play-state');
                                      }),
                                        (0, N.r)(Wn);
                                    }));
                                };
                              k &&
                                (k.addEventListener('webkitAnimationEnd', _e, ge),
                                k.addEventListener('animationend', _e, ge),
                                (ne = () => {
                                  k.removeEventListener('webkitAnimationEnd', _e, ge),
                                    k.removeEventListener('animationend', _e, ge);
                                }));
                            })(G[0]);
                        }
                      })(),
                  (Ze = !1);
              }),
            D = (m, v) => {
              const C = S[0];
              return (
                void 0 === C || (void 0 !== C.offset && 0 !== C.offset)
                  ? (S = [{ offset: 0, [m]: v }, ...S])
                  : (C[m] = v),
                K
              );
            };
          return (K = {
            parentAnimation: re,
            elements: G,
            childAnimations: St,
            id: pt,
            animationFinish: Wn,
            from: D,
            to: (m, v) => {
              const C = S[S.length - 1];
              return (
                void 0 === C || (void 0 !== C.offset && 1 !== C.offset)
                  ? (S = [...S, { offset: 1, [m]: v }])
                  : (C[m] = v),
                K
              );
            },
            fromTo: (m, v, C) => D(m, v).to(m, C),
            parent: (m) => ((re = m), K),
            play: f,
            pause: () => (
              St.forEach((m) => {
                m.pause();
              }),
              Uo(),
              K
            ),
            stop: () => {
              St.forEach((m) => {
                m.stop();
              }),
                ue && (pi(), (ue = !1)),
                (Qe = !1),
                ($ = !1),
                (ee = !0),
                (O = void 0),
                (q = void 0),
                (z = void 0),
                (xe = 0),
                (M = !1),
                (x = !0),
                (Ze = !1);
            },
            destroy: (m) => (
              St.forEach((v) => {
                v.destroy(m);
              }),
              ((m) => {
                pi(), m && hn();
              })(m),
              (G.length = 0),
              (St.length = 0),
              (S.length = 0),
              (ut.length = 0),
              (mt.length = 0),
              (ue = !1),
              (ee = !0),
              K
            ),
            keyframes: (m) => {
              const v = S !== m;
              return (
                (S = m),
                v &&
                  ((m) => {
                    Jt
                      ? hi().forEach((v) => {
                          if (v.effect.setKeyframes) v.effect.setKeyframes(m);
                          else {
                            const C = new KeyframeEffect(v.effect.target, m, v.effect.getTiming());
                            v.effect = C;
                          }
                        })
                      : pn();
                  })(S),
                K
              );
            },
            addAnimation: (m) => {
              if (null != m)
                if (Array.isArray(m)) for (const v of m) v.parent(K), St.push(v);
                else m.parent(K), St.push(m);
              return K;
            },
            addElement: (m) => {
              if (null != m)
                if (1 === m.nodeType) G.push(m);
                else if (m.length >= 0) for (let v = 0; v < m.length; v++) G.push(m[v]);
                else console.error('Invalid addElement value');
              return K;
            },
            update: en,
            fill: (m) => ((_e = m), en(!0), K),
            direction: (m) => ((Me = m), en(!0), K),
            iterations: (m) => ((be = m), en(!0), K),
            duration: (m) => (!Jt && 0 === m && (m = 1), (ne = m), en(!0), K),
            easing: (m) => ((ge = m), en(!0), K),
            delay: (m) => ((E = m), en(!0), K),
            getWebAnimations: hi,
            getKeyframes: () => S,
            getFill: Dr,
            getDirection: $t,
            getDelay: sr,
            getIterations: On,
            getEasing: Cr,
            getDuration: Rt,
            afterAddRead: (m) => (Sn.push(m), K),
            afterAddWrite: (m) => (bs.push(m), K),
            afterClearStyles: (m = []) => {
              for (const v of m) Te[v] = '';
              return K;
            },
            afterStyles: (m = {}) => ((Te = m), K),
            afterRemoveClass: (m) => ((Z = le(Z, m)), K),
            afterAddClass: (m) => ((R = le(R, m)), K),
            beforeAddRead: (m) => (In.push(m), K),
            beforeAddWrite: (m) => (lo.push(m), K),
            beforeClearStyles: (m = []) => {
              for (const v of m) H[v] = '';
              return K;
            },
            beforeStyles: (m = {}) => ((H = m), K),
            beforeRemoveClass: (m) => ((oe = le(oe, m)), K),
            beforeAddClass: (m) => ((j = le(j, m)), K),
            onFinish: uo,
            isRunning: () => 0 !== xe && !Ze,
            progressStart: (m = !1, v) => (
              St.forEach((C) => {
                C.progressStart(m, v);
              }),
              Uo(),
              (Qe = m),
              ue || bi(),
              en(!1, !0, v),
              K
            ),
            progressStep: (m) => (
              St.forEach((v) => {
                v.progressStep(m);
              }),
              br(m),
              K
            ),
            progressEnd: (m, v, C) => (
              (Qe = !1),
              St.forEach((P) => {
                P.progressEnd(m, v, C);
              }),
              void 0 !== C && (q = C),
              (M = !1),
              (x = !0),
              0 === m
                ? ((O = 'reverse' === $t() ? 'normal' : 'reverse'),
                  'reverse' === O && (x = !1),
                  Jt ? (en(), br(1 - v)) : ((z = (1 - v) * Rt() * -1), en(!1, !1)))
                : 1 === m && (Jt ? (en(), br(v)) : ((z = v * Rt() * -1), en(!1, !1))),
              void 0 !== m &&
                (uo(
                  () => {
                    (q = void 0), (O = void 0), (z = void 0);
                  },
                  { oneTimeCallback: !0 },
                ),
                re || f()),
              K
            ),
          });
        };
    },
    4349: (qt, st, ae) => {
      'use strict';
      ae.d(st, { G: () => ke });
      class ze {
        constructor(W, Ie, Ce, We, Ue) {
          (this.id = Ie), (this.name = Ce), (this.disableScroll = Ue), (this.priority = 1e6 * We + Ie), (this.ctrl = W);
        }
        canStart() {
          return !!this.ctrl && this.ctrl.canStart(this.name);
        }
        start() {
          return !!this.ctrl && this.ctrl.start(this.name, this.id, this.priority);
        }
        capture() {
          if (!this.ctrl) return !1;
          const W = this.ctrl.capture(this.name, this.id, this.priority);
          return W && this.disableScroll && this.ctrl.disableScroll(this.id), W;
        }
        release() {
          this.ctrl && (this.ctrl.release(this.id), this.disableScroll && this.ctrl.enableScroll(this.id));
        }
        destroy() {
          this.release(), (this.ctrl = void 0);
        }
      }
      class je {
        constructor(W, Ie, Ce, We) {
          (this.id = Ie), (this.disable = Ce), (this.disableScroll = We), (this.ctrl = W);
        }
        block() {
          if (this.ctrl) {
            if (this.disable) for (const W of this.disable) this.ctrl.disableGesture(W, this.id);
            this.disableScroll && this.ctrl.disableScroll(this.id);
          }
        }
        unblock() {
          if (this.ctrl) {
            if (this.disable) for (const W of this.disable) this.ctrl.enableGesture(W, this.id);
            this.disableScroll && this.ctrl.enableScroll(this.id);
          }
        }
        destroy() {
          this.unblock(), (this.ctrl = void 0);
        }
      }
      const qe = 'backdrop-no-scroll',
        ke = new (class N {
          constructor() {
            (this.gestureId = 0),
              (this.requestedStart = new Map()),
              (this.disabledGestures = new Map()),
              (this.disabledScroll = new Set());
          }
          createGesture(W) {
            var Ie;
            return new ze(
              this,
              this.newID(),
              W.name,
              null !== (Ie = W.priority) && void 0 !== Ie ? Ie : 0,
              !!W.disableScroll,
            );
          }
          createBlocker(W = {}) {
            return new je(this, this.newID(), W.disable, !!W.disableScroll);
          }
          start(W, Ie, Ce) {
            return this.canStart(W) ? (this.requestedStart.set(Ie, Ce), !0) : (this.requestedStart.delete(Ie), !1);
          }
          capture(W, Ie, Ce) {
            if (!this.start(W, Ie, Ce)) return !1;
            const We = this.requestedStart;
            let Ue = -1e4;
            if (
              (We.forEach((Ee) => {
                Ue = Math.max(Ue, Ee);
              }),
              Ue === Ce)
            ) {
              (this.capturedId = Ie), We.clear();
              const Ee = new CustomEvent('ionGestureCaptured', { detail: { gestureName: W } });
              return document.dispatchEvent(Ee), !0;
            }
            return We.delete(Ie), !1;
          }
          release(W) {
            this.requestedStart.delete(W), this.capturedId === W && (this.capturedId = void 0);
          }
          disableGesture(W, Ie) {
            let Ce = this.disabledGestures.get(W);
            void 0 === Ce && ((Ce = new Set()), this.disabledGestures.set(W, Ce)), Ce.add(Ie);
          }
          enableGesture(W, Ie) {
            const Ce = this.disabledGestures.get(W);
            void 0 !== Ce && Ce.delete(Ie);
          }
          disableScroll(W) {
            this.disabledScroll.add(W), 1 === this.disabledScroll.size && document.body.classList.add(qe);
          }
          enableScroll(W) {
            this.disabledScroll.delete(W), 0 === this.disabledScroll.size && document.body.classList.remove(qe);
          }
          canStart(W) {
            return !(void 0 !== this.capturedId || this.isDisabled(W));
          }
          isCaptured() {
            return void 0 !== this.capturedId;
          }
          isScrollDisabled() {
            return this.disabledScroll.size > 0;
          }
          isDisabled(W) {
            const Ie = this.disabledGestures.get(W);
            return !!(Ie && Ie.size > 0);
          }
          newID() {
            return this.gestureId++, this.gestureId;
          }
        })();
    },
    7593: (qt, st, ae) => {
      'use strict';
      ae.r(st),
        ae.d(st, {
          MENU_BACK_BUTTON_PRIORITY: () => ke,
          OVERLAY_BACK_BUTTON_PRIORITY: () => qe,
          blockHardwareBackButton: () => ze,
          startHardwareBackButton: () => je,
        });
      var N = ae(5861);
      const ze = () => {
          document.addEventListener('backbutton', () => {});
        },
        je = () => {
          const Ke = document;
          let W = !1;
          Ke.addEventListener('backbutton', () => {
            if (W) return;
            let Ie = 0,
              Ce = [];
            const We = new CustomEvent('ionBackButton', {
              bubbles: !1,
              detail: {
                register(L, te) {
                  Ce.push({ priority: L, handler: te, id: Ie++ });
                },
              },
            });
            Ke.dispatchEvent(We);
            const Ue = (function () {
                var L = (0, N.Z)(function* (te) {
                  try {
                    if (te?.handler) {
                      const le = te.handler(Ee);
                      null != le && (yield le);
                    }
                  } catch (le) {
                    console.error(le);
                  }
                });
                return function (le) {
                  return L.apply(this, arguments);
                };
              })(),
              Ee = () => {
                if (Ce.length > 0) {
                  let L = { priority: Number.MIN_SAFE_INTEGER, handler: () => {}, id: -1 };
                  Ce.forEach((te) => {
                    te.priority >= L.priority && (L = te);
                  }),
                    (W = !0),
                    (Ce = Ce.filter((te) => te.id !== L.id)),
                    Ue(L).then(() => (W = !1));
                }
              };
            Ee();
          });
        },
        qe = 100,
        ke = 99;
    },
    5730: (qt, st, ae) => {
      'use strict';
      ae.d(st, {
        a: () => W,
        b: () => Ie,
        c: () => je,
        d: () => te,
        e: () => le,
        f: () => L,
        g: () => Ce,
        h: () => be,
        i: () => Ke,
        j: () => qe,
        k: () => Ee,
        l: () => pe,
        m: () => Ue,
        n: () => k,
        o: () => ge,
        p: () => ne,
        q: () => _e,
        r: () => We,
        s: () => Me,
        t: () => N,
        u: () => E,
      });
      const N = (S, j = 0) =>
          new Promise((oe) => {
            ze(S, j, oe);
          }),
        ze = (S, j = 0, oe) => {
          let ue, re;
          const H = { passive: !0 },
            Z = () => {
              ue && ue();
            },
            Te = (xe) => {
              (void 0 === xe || S === xe.target) && (Z(), oe(xe));
            };
          return (
            S &&
              (S.addEventListener('webkitTransitionEnd', Te, H),
              S.addEventListener('transitionend', Te, H),
              (re = setTimeout(Te, j + 500)),
              (ue = () => {
                re && (clearTimeout(re), (re = void 0)),
                  S.removeEventListener('webkitTransitionEnd', Te, H),
                  S.removeEventListener('transitionend', Te, H);
              })),
            Z
          );
        },
        je = (S, j) => {
          S.componentOnReady ? S.componentOnReady().then((oe) => j(oe)) : We(() => j(S));
        },
        qe = (S, j = []) => {
          const oe = {};
          return (
            j.forEach((ue) => {
              S.hasAttribute(ue) &&
                (null !== S.getAttribute(ue) && (oe[ue] = S.getAttribute(ue)), S.removeAttribute(ue));
            }),
            oe
          );
        },
        ke = [
          'role',
          'aria-activedescendant',
          'aria-atomic',
          'aria-autocomplete',
          'aria-braillelabel',
          'aria-brailleroledescription',
          'aria-busy',
          'aria-checked',
          'aria-colcount',
          'aria-colindex',
          'aria-colindextext',
          'aria-colspan',
          'aria-controls',
          'aria-current',
          'aria-describedby',
          'aria-description',
          'aria-details',
          'aria-disabled',
          'aria-errormessage',
          'aria-expanded',
          'aria-flowto',
          'aria-haspopup',
          'aria-hidden',
          'aria-invalid',
          'aria-keyshortcuts',
          'aria-label',
          'aria-labelledby',
          'aria-level',
          'aria-live',
          'aria-multiline',
          'aria-multiselectable',
          'aria-orientation',
          'aria-owns',
          'aria-placeholder',
          'aria-posinset',
          'aria-pressed',
          'aria-readonly',
          'aria-relevant',
          'aria-required',
          'aria-roledescription',
          'aria-rowcount',
          'aria-rowindex',
          'aria-rowindextext',
          'aria-rowspan',
          'aria-selected',
          'aria-setsize',
          'aria-sort',
          'aria-valuemax',
          'aria-valuemin',
          'aria-valuenow',
          'aria-valuetext',
        ],
        Ke = (S, j) => {
          let oe = ke;
          return j && j.length > 0 && (oe = oe.filter((ue) => !j.includes(ue))), qe(S, oe);
        },
        W = (S, j, oe, ue) => {
          var re;
          if (typeof window < 'u') {
            const R = null === (re = window?.Ionic) || void 0 === re ? void 0 : re.config;
            if (R) {
              const Z = R.get('_ael');
              if (Z) return Z(S, j, oe, ue);
              if (R._ael) return R._ael(S, j, oe, ue);
            }
          }
          return S.addEventListener(j, oe, ue);
        },
        Ie = (S, j, oe, ue) => {
          var re;
          if (typeof window < 'u') {
            const R = null === (re = window?.Ionic) || void 0 === re ? void 0 : re.config;
            if (R) {
              const Z = R.get('_rel');
              if (Z) return Z(S, j, oe, ue);
              if (R._rel) return R._rel(S, j, oe, ue);
            }
          }
          return S.removeEventListener(j, oe, ue);
        },
        Ce = (S, j = S) => S.shadowRoot || j,
        We = (S) =>
          'function' == typeof __zone_symbol__requestAnimationFrame
            ? __zone_symbol__requestAnimationFrame(S)
            : 'function' == typeof requestAnimationFrame
            ? requestAnimationFrame(S)
            : setTimeout(S),
        Ue = (S) => !!S.shadowRoot && !!S.attachShadow,
        Ee = (S) => {
          const j = S.closest('ion-item');
          return j ? j.querySelector('ion-label') : null;
        },
        L = (S) => {
          if ((S.focus(), S.classList.contains('ion-focusable'))) {
            const j = S.closest('ion-app');
            j && j.setFocus([S]);
          }
        },
        te = (S, j) => {
          let oe;
          const ue = S.getAttribute('aria-labelledby'),
            re = S.id;
          let H = null !== ue && '' !== ue.trim() ? ue : j + '-lbl',
            R = null !== ue && '' !== ue.trim() ? document.getElementById(ue) : Ee(S);
          return (
            R
              ? (null === ue && (R.id = H), (oe = R.textContent), R.setAttribute('aria-hidden', 'true'))
              : '' !== re.trim() &&
                ((R = document.querySelector(`label[for="${re}"]`)),
                R && ('' !== R.id ? (H = R.id) : (R.id = H = `${re}-lbl`), (oe = R.textContent))),
            { label: R, labelId: H, labelText: oe }
          );
        },
        le = (S, j, oe, ue, re) => {
          if (S || Ue(j)) {
            let H = j.querySelector('input.aux-input');
            H ||
              ((H = j.ownerDocument.createElement('input')),
              (H.type = 'hidden'),
              H.classList.add('aux-input'),
              j.appendChild(H)),
              (H.disabled = re),
              (H.name = oe),
              (H.value = ue || '');
          }
        },
        pe = (S, j, oe) => Math.max(S, Math.min(j, oe)),
        k = (S, j) => {
          if (!S) {
            const oe = 'ASSERT: ' + j;
            throw (console.error(oe), new Error(oe));
          }
        },
        E = (S) => S.timeStamp || Date.now(),
        ne = (S) => {
          if (S) {
            const j = S.changedTouches;
            if (j && j.length > 0) {
              const oe = j[0];
              return { x: oe.clientX, y: oe.clientY };
            }
            if (void 0 !== S.pageX) return { x: S.pageX, y: S.pageY };
          }
          return { x: 0, y: 0 };
        },
        ge = (S) => {
          const j = 'rtl' === document.dir;
          switch (S) {
            case 'start':
              return j;
            case 'end':
              return !j;
            default:
              throw new Error(`"${S}" is not a valid value for [side]. Use "start" or "end" instead.`);
          }
        },
        be = (S, j) => {
          const oe = S._original || S;
          return { _original: S, emit: _e(oe.emit.bind(oe), j) };
        },
        _e = (S, j = 0) => {
          let oe;
          return (...ue) => {
            clearTimeout(oe), (oe = setTimeout(S, j, ...ue));
          };
        },
        Me = (S, j) => {
          if ((S ?? (S = {}), j ?? (j = {}), S === j)) return !0;
          const oe = Object.keys(S);
          if (oe.length !== Object.keys(j).length) return !1;
          for (const ue of oe) if (!(ue in j) || S[ue] !== j[ue]) return !1;
          return !0;
        };
    },
    4292: (qt, st, ae) => {
      'use strict';
      ae.d(st, { m: () => Ue });
      var N = ae(5861),
        ze = ae(7593),
        je = ae(5730),
        qe = ae(9658),
        ke = ae(8834);
      const Ke = (Ee) => (0, ke.c)().duration(Ee ? 400 : 300),
        W = (Ee) => {
          let L, te;
          const le = Ee.width + 8,
            pe = (0, ke.c)(),
            k = (0, ke.c)();
          Ee.isEndSide ? ((L = le + 'px'), (te = '0px')) : ((L = -le + 'px'), (te = '0px')),
            pe.addElement(Ee.menuInnerEl).fromTo('transform', `translateX(${L})`, `translateX(${te})`);
          const ne = 'ios' === (0, qe.b)(Ee),
            ge = ne ? 0.2 : 0.25;
          return k.addElement(Ee.backdropEl).fromTo('opacity', 0.01, ge), Ke(ne).addAnimation([pe, k]);
        },
        Ie = (Ee) => {
          let L, te;
          const le = (0, qe.b)(Ee),
            pe = Ee.width;
          Ee.isEndSide ? ((L = -pe + 'px'), (te = pe + 'px')) : ((L = pe + 'px'), (te = -pe + 'px'));
          const k = (0, ke.c)().addElement(Ee.menuInnerEl).fromTo('transform', `translateX(${te})`, 'translateX(0px)'),
            E = (0, ke.c)().addElement(Ee.contentEl).fromTo('transform', 'translateX(0px)', `translateX(${L})`),
            ne = (0, ke.c)().addElement(Ee.backdropEl).fromTo('opacity', 0.01, 0.32);
          return Ke('ios' === le).addAnimation([k, E, ne]);
        },
        Ce = (Ee) => {
          const L = (0, qe.b)(Ee),
            te = Ee.width * (Ee.isEndSide ? -1 : 1) + 'px',
            le = (0, ke.c)().addElement(Ee.contentEl).fromTo('transform', 'translateX(0px)', `translateX(${te})`);
          return Ke('ios' === L).addAnimation(le);
        },
        Ue = (() => {
          const Ee = new Map(),
            L = [],
            te = (function () {
              var T = (0, N.Z)(function* (O) {
                const q = yield be(O);
                return !!q && q.open();
              });
              return function (q) {
                return T.apply(this, arguments);
              };
            })(),
            le = (function () {
              var T = (0, N.Z)(function* (O) {
                const q = yield void 0 !== O ? be(O) : _e();
                return void 0 !== q && q.close();
              });
              return function (q) {
                return T.apply(this, arguments);
              };
            })(),
            pe = (function () {
              var T = (0, N.Z)(function* (O) {
                const q = yield be(O);
                return !!q && q.toggle();
              });
              return function (q) {
                return T.apply(this, arguments);
              };
            })(),
            k = (function () {
              var T = (0, N.Z)(function* (O, q) {
                const z = yield be(q);
                return z && (z.disabled = !O), z;
              });
              return function (q, z) {
                return T.apply(this, arguments);
              };
            })(),
            E = (function () {
              var T = (0, N.Z)(function* (O, q) {
                const z = yield be(q);
                return z && (z.swipeGesture = O), z;
              });
              return function (q, z) {
                return T.apply(this, arguments);
              };
            })(),
            ne = (function () {
              var T = (0, N.Z)(function* (O) {
                if (null != O) {
                  const q = yield be(O);
                  return void 0 !== q && q.isOpen();
                }
                return void 0 !== (yield _e());
              });
              return function (q) {
                return T.apply(this, arguments);
              };
            })(),
            ge = (function () {
              var T = (0, N.Z)(function* (O) {
                const q = yield be(O);
                return !!q && !q.disabled;
              });
              return function (q) {
                return T.apply(this, arguments);
              };
            })(),
            be = (function () {
              var T = (0, N.Z)(function* (O) {
                return (
                  yield $(),
                  'start' === O || 'end' === O
                    ? Qe((x) => x.side === O && !x.disabled) || Qe((x) => x.side === O)
                    : null != O
                    ? Qe((z) => z.menuId === O)
                    : Qe((z) => !z.disabled) || (L.length > 0 ? L[0].el : void 0)
                );
              });
              return function (q) {
                return T.apply(this, arguments);
              };
            })(),
            _e = (function () {
              var T = (0, N.Z)(function* () {
                return yield $(), Z();
              });
              return function () {
                return T.apply(this, arguments);
              };
            })(),
            Me = (function () {
              var T = (0, N.Z)(function* () {
                return yield $(), Te();
              });
              return function () {
                return T.apply(this, arguments);
              };
            })(),
            S = (function () {
              var T = (0, N.Z)(function* () {
                return yield $(), xe();
              });
              return function () {
                return T.apply(this, arguments);
              };
            })(),
            j = (T, O) => {
              Ee.set(T, O);
            },
            re = (T) => {
              const O = T.side;
              L.filter((q) => q.side === O && q !== T).forEach((q) => (q.disabled = !0));
            },
            H = (function () {
              var T = (0, N.Z)(function* (O, q, z) {
                if (xe()) return !1;
                if (q) {
                  const x = yield _e();
                  x && O.el !== x && (yield x.setOpen(!1, !1));
                }
                return O._setOpen(q, z);
              });
              return function (q, z, x) {
                return T.apply(this, arguments);
              };
            })(),
            Z = () => Qe((T) => T._isOpen),
            Te = () => L.map((T) => T.el),
            xe = () => L.some((T) => T.isAnimating),
            Qe = (T) => {
              const O = L.find(T);
              if (void 0 !== O) return O.el;
            },
            $ = () =>
              Promise.all(
                Array.from(document.querySelectorAll('ion-menu')).map((T) => new Promise((O) => (0, je.c)(T, O))),
              );
          return (
            j('reveal', Ce),
            j('push', Ie),
            j('overlay', W),
            typeof document < 'u' &&
              document.addEventListener('ionBackButton', (T) => {
                const O = Z();
                O && T.detail.register(ze.MENU_BACK_BUTTON_PRIORITY, () => O.close());
              }),
            {
              registerAnimation: j,
              get: be,
              getMenus: Me,
              getOpen: _e,
              isEnabled: ge,
              swipeGesture: E,
              isAnimating: S,
              isOpen: ne,
              enable: k,
              toggle: pe,
              close: le,
              open: te,
              _getOpenSync: Z,
              _createAnimation: (T, O) => {
                const q = Ee.get(T);
                if (!q) throw new Error('animation not registered');
                return q(O);
              },
              _register: (T) => {
                L.indexOf(T) < 0 && (T.disabled || re(T), L.push(T));
              },
              _unregister: (T) => {
                const O = L.indexOf(T);
                O > -1 && L.splice(O, 1);
              },
              _setOpen: H,
              _setActiveMenu: re,
            }
          );
        })();
    },
    3457: (qt, st, ae) => {
      'use strict';
      ae.d(st, { w: () => N });
      const N = typeof window < 'u' ? window : void 0;
    },
    1308: (qt, st, ae) => {
      'use strict';
      ae.d(st, {
        B: () => Fs,
        H: () => G,
        a: () => x,
        b: () => Di,
        c: () => go,
        e: () => gi,
        f: () => dt,
        g: () => M,
        h: () => ut,
        i: () => No,
        j: () => $t,
        k: () => Vr,
        p: () => pe,
        r: () => Ci,
        s: () => te,
      });
      var N = ae(5861);
      let je,
        qe,
        ke,
        Ke = !1,
        W = !1,
        Ie = !1,
        Ce = !1,
        We = !1;
      const Ue = typeof window < 'u' ? window : {},
        Ee = Ue.document || { head: {} },
        L = {
          $flags$: 0,
          $resourcesUrl$: '',
          jmp: (f) => f(),
          raf: (f) => requestAnimationFrame(f),
          ael: (f, p, D, b) => f.addEventListener(p, D, b),
          rel: (f, p, D, b) => f.removeEventListener(p, D, b),
          ce: (f, p) => new CustomEvent(f, p),
        },
        te = (f) => {
          Object.assign(L, f);
        },
        pe = (f) => Promise.resolve(f),
        k = (() => {
          try {
            return new CSSStyleSheet(), 'function' == typeof new CSSStyleSheet().replaceSync;
          } catch {}
          return !1;
        })(),
        E = (f, p, D, b) => {
          D &&
            D.map(([_, m, v]) => {
              const C = ge(f, _),
                P = ne(p, v),
                U = be(_);
              L.ael(C, m, P, U), (p.$rmListeners$ = p.$rmListeners$ || []).push(() => L.rel(C, m, P, U));
            });
        },
        ne = (f, p) => (D) => {
          try {
            256 & f.$flags$ ? f.$lazyInstance$[p](D) : (f.$queuedListeners$ = f.$queuedListeners$ || []).push([p, D]);
          } catch (b) {
            qn(b);
          }
        },
        ge = (f, p) => (4 & p ? Ee : 8 & p ? Ue : 16 & p ? Ee.body : f),
        be = (f) => 0 != (2 & f),
        oe = 's-id',
        ue = 'sty-id',
        R = 'http://www.w3.org/1999/xlink',
        xe = new WeakMap(),
        Qe = (f, p, D) => {
          let b = ho.get(f);
          k && D ? ((b = b || new CSSStyleSheet()), 'string' == typeof b ? (b = p) : b.replaceSync(p)) : (b = p),
            ho.set(f, b);
        },
        $ = (f, p, D, b) => {
          let _ = O(p, D);
          const m = ho.get(_);
          if (((f = 11 === f.nodeType ? f : Ee), m))
            if ('string' == typeof m) {
              let C,
                v = xe.get((f = f.head || f));
              v || xe.set(f, (v = new Set())),
                v.has(_) ||
                  (f.host && (C = f.querySelector(`[${ue}="${_}"]`))
                    ? (C.innerHTML = m)
                    : ((C = Ee.createElement('style')), (C.innerHTML = m), f.insertBefore(C, f.querySelector('link'))),
                  v && v.add(_));
            } else f.adoptedStyleSheets.includes(m) || (f.adoptedStyleSheets = [...f.adoptedStyleSheets, m]);
          return _;
        },
        O = (f, p) => 'sc-' + (p && 32 & f.$flags$ ? f.$tagName$ + '-' + p : f.$tagName$),
        q = (f) => f.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{'),
        x = (f) => wi.push(f),
        M = (f) => pn(f).$modeName$,
        ee = {},
        pt = (f) => 'object' == (f = typeof f) || 'function' === f,
        ut = (f, p, ...D) => {
          let b = null,
            _ = null,
            m = null,
            v = !1,
            C = !1;
          const P = [],
            U = (Ae) => {
              for (let Ne = 0; Ne < Ae.length; Ne++)
                (b = Ae[Ne]),
                  Array.isArray(b)
                    ? U(b)
                    : null != b &&
                      'boolean' != typeof b &&
                      ((v = 'function' != typeof f && !pt(b)) && (b = String(b)),
                      v && C ? (P[P.length - 1].$text$ += b) : P.push(v ? mt(null, b) : b),
                      (C = v));
            };
          if ((U(D), p)) {
            p.key && (_ = p.key), p.name && (m = p.name);
            {
              const Ae = p.className || p.class;
              Ae &&
                (p.class =
                  'object' != typeof Ae
                    ? Ae
                    : Object.keys(Ae)
                        .filter((Ne) => Ae[Ne])
                        .join(' '));
            }
          }
          if ('function' == typeof f) return f(null === p ? {} : p, P, ir);
          const me = mt(f, null);
          return (me.$attrs$ = p), P.length > 0 && (me.$children$ = P), (me.$key$ = _), (me.$name$ = m), me;
        },
        mt = (f, p) => ({
          $flags$: 0,
          $tag$: f,
          $text$: p,
          $elm$: null,
          $children$: null,
          $attrs$: null,
          $key$: null,
          $name$: null,
        }),
        G = {},
        ir = { forEach: (f, p) => f.map(In).forEach(p), map: (f, p) => f.map(In).map(p).map(lo) },
        In = (f) => ({
          vattrs: f.$attrs$,
          vchildren: f.$children$,
          vkey: f.$key$,
          vname: f.$name$,
          vtag: f.$tag$,
          vtext: f.$text$,
        }),
        lo = (f) => {
          if ('function' == typeof f.vtag) {
            const D = Object.assign({}, f.vattrs);
            return f.vkey && (D.key = f.vkey), f.vname && (D.name = f.vname), ut(f.vtag, D, ...(f.vchildren || []));
          }
          const p = mt(f.vtag, f.vtext);
          return (p.$attrs$ = f.vattrs), (p.$children$ = f.vchildren), (p.$key$ = f.vkey), (p.$name$ = f.vname), p;
        },
        Sn = (f, p, D, b, _, m) => {
          if (D !== b) {
            let v = br(f, p),
              C = p.toLowerCase();
            if ('class' === p) {
              const P = f.classList,
                U = nn(D),
                me = nn(b);
              P.remove(...U.filter((Ae) => Ae && !me.includes(Ae))), P.add(...me.filter((Ae) => Ae && !U.includes(Ae)));
            } else if ('style' === p) {
              for (const P in D)
                (!b || null == b[P]) && (P.includes('-') ? f.style.removeProperty(P) : (f.style[P] = ''));
              for (const P in b)
                (!D || b[P] !== D[P]) && (P.includes('-') ? f.style.setProperty(P, b[P]) : (f.style[P] = b[P]));
            } else if ('key' !== p)
              if ('ref' === p) b && b(f);
              else if (v || 'o' !== p[0] || 'n' !== p[1]) {
                const P = pt(b);
                if ((v || (P && null !== b)) && !_)
                  try {
                    if (f.tagName.includes('-')) f[p] = b;
                    else {
                      const me = b ?? '';
                      'list' === p ? (v = !1) : (null == D || f[p] != me) && (f[p] = me);
                    }
                  } catch {}
                let U = !1;
                C !== (C = C.replace(/^xlink\:?/, '')) && ((p = C), (U = !0)),
                  null == b || !1 === b
                    ? (!1 !== b || '' === f.getAttribute(p)) && (U ? f.removeAttributeNS(R, p) : f.removeAttribute(p))
                    : (!v || 4 & m || _) &&
                      !P &&
                      ((b = !0 === b ? '' : b), U ? f.setAttributeNS(R, p, b) : f.setAttribute(p, b));
              } else
                (p = '-' === p[2] ? p.slice(3) : br(Ue, C) ? C.slice(2) : C[2] + p.slice(3)),
                  D && L.rel(f, p, D, !1),
                  b && L.ael(f, p, b, !1);
          }
        },
        bs = /\s/,
        nn = (f) => (f ? f.split(bs) : []),
        fi = (f, p, D, b) => {
          const _ = 11 === p.$elm$.nodeType && p.$elm$.host ? p.$elm$.host : p.$elm$,
            m = (f && f.$attrs$) || ee,
            v = p.$attrs$ || ee;
          for (b in m) b in v || Sn(_, b, m[b], void 0, D, p.$flags$);
          for (b in v) Sn(_, b, m[b], v[b], D, p.$flags$);
        },
        Jt = (f, p, D, b) => {
          const _ = p.$children$[D];
          let v,
            C,
            P,
            m = 0;
          if (
            (Ke ||
              ((Ie = !0),
              'slot' === _.$tag$ && (je && b.classList.add(je + '-s'), (_.$flags$ |= _.$children$ ? 2 : 1))),
            null !== _.$text$)
          )
            v = _.$elm$ = Ee.createTextNode(_.$text$);
          else if (1 & _.$flags$) v = _.$elm$ = Ee.createTextNode('');
          else {
            if (
              (Ce || (Ce = 'svg' === _.$tag$),
              (v = _.$elm$ =
                Ee.createElementNS(
                  Ce ? 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
                  2 & _.$flags$ ? 'slot-fb' : _.$tag$,
                )),
              Ce && 'foreignObject' === _.$tag$ && (Ce = !1),
              fi(null, _, Ce),
              ((f) => null != f)(je) && v['s-si'] !== je && v.classList.add((v['s-si'] = je)),
              _.$children$)
            )
              for (m = 0; m < _.$children$.length; ++m) (C = Jt(f, _, m, v)), C && v.appendChild(C);
            'svg' === _.$tag$ ? (Ce = !1) : 'foreignObject' === v.tagName && (Ce = !0);
          }
          return (
            (v['s-hn'] = ke),
            3 & _.$flags$ &&
              ((v['s-sr'] = !0),
              (v['s-cr'] = qe),
              (v['s-sn'] = _.$name$ || ''),
              (P = f && f.$children$ && f.$children$[D]),
              P && P.$tag$ === _.$tag$ && f.$elm$ && co(f.$elm$, !1)),
            v
          );
        },
        co = (f, p) => {
          L.$flags$ |= 1;
          const D = f.childNodes;
          for (let b = D.length - 1; b >= 0; b--) {
            const _ = D[b];
            _['s-hn'] !== ke &&
              _['s-ol'] &&
              (uo(_).insertBefore(_, Po(_)), _['s-ol'].remove(), (_['s-ol'] = void 0), (Ie = !0)),
              p && co(_, p);
          }
          L.$flags$ &= -2;
        },
        hi = (f, p, D, b, _, m) => {
          let C,
            v = (f['s-cr'] && f['s-cr'].parentNode) || f;
          for (v.shadowRoot && v.tagName === ke && (v = v.shadowRoot); _ <= m; ++_)
            b[_] && ((C = Jt(null, D, _, f)), C && ((b[_].$elm$ = C), v.insertBefore(C, Po(p))));
        },
        Gn = (f, p, D, b, _) => {
          for (; p <= D; ++p)
            (b = f[p]) && ((_ = b.$elm$), Ss(b), (W = !0), _['s-ol'] ? _['s-ol'].remove() : co(_, !0), _.remove());
        },
        Oo = (f, p) => f.$tag$ === p.$tag$ && ('slot' === f.$tag$ ? f.$name$ === p.$name$ : f.$key$ === p.$key$),
        Po = (f) => (f && f['s-ol']) || f,
        uo = (f) => (f['s-ol'] ? f['s-ol'] : f).parentNode,
        _r = (f, p) => {
          const D = (p.$elm$ = f.$elm$),
            b = f.$children$,
            _ = p.$children$,
            m = p.$tag$,
            v = p.$text$;
          let C;
          null === v
            ? ((Ce = 'svg' === m || ('foreignObject' !== m && Ce)),
              'slot' === m || fi(f, p, Ce),
              null !== b && null !== _
                ? ((f, p, D, b) => {
                    let Kn,
                      Yn,
                      _ = 0,
                      m = 0,
                      v = 0,
                      C = 0,
                      P = p.length - 1,
                      U = p[0],
                      me = p[P],
                      Ae = b.length - 1,
                      Ne = b[0],
                      Mt = b[Ae];
                    for (; _ <= P && m <= Ae; )
                      if (null == U) U = p[++_];
                      else if (null == me) me = p[--P];
                      else if (null == Ne) Ne = b[++m];
                      else if (null == Mt) Mt = b[--Ae];
                      else if (Oo(U, Ne)) _r(U, Ne), (U = p[++_]), (Ne = b[++m]);
                      else if (Oo(me, Mt)) _r(me, Mt), (me = p[--P]), (Mt = b[--Ae]);
                      else if (Oo(U, Mt))
                        ('slot' === U.$tag$ || 'slot' === Mt.$tag$) && co(U.$elm$.parentNode, !1),
                          _r(U, Mt),
                          f.insertBefore(U.$elm$, me.$elm$.nextSibling),
                          (U = p[++_]),
                          (Mt = b[--Ae]);
                      else if (Oo(me, Ne))
                        ('slot' === U.$tag$ || 'slot' === Mt.$tag$) && co(me.$elm$.parentNode, !1),
                          _r(me, Ne),
                          f.insertBefore(me.$elm$, U.$elm$),
                          (me = p[--P]),
                          (Ne = b[++m]);
                      else {
                        for (v = -1, C = _; C <= P; ++C)
                          if (p[C] && null !== p[C].$key$ && p[C].$key$ === Ne.$key$) {
                            v = C;
                            break;
                          }
                        v >= 0
                          ? ((Yn = p[v]),
                            Yn.$tag$ !== Ne.$tag$
                              ? (Kn = Jt(p && p[m], D, v, f))
                              : (_r(Yn, Ne), (p[v] = void 0), (Kn = Yn.$elm$)),
                            (Ne = b[++m]))
                          : ((Kn = Jt(p && p[m], D, m, f)), (Ne = b[++m])),
                          Kn && uo(U.$elm$).insertBefore(Kn, Po(U.$elm$));
                      }
                    _ > P ? hi(f, null == b[Ae + 1] ? null : b[Ae + 1].$elm$, D, b, m, Ae) : m > Ae && Gn(p, _, P);
                  })(D, b, p, _)
                : null !== _
                ? (null !== f.$text$ && (D.textContent = ''), hi(D, null, p, _, 0, _.length - 1))
                : null !== b && Gn(b, 0, b.length - 1),
              Ce && 'svg' === m && (Ce = !1))
            : (C = D['s-cr'])
            ? (C.parentNode.textContent = v)
            : f.$text$ !== v && (D.data = v);
        },
        pi = (f) => {
          const p = f.childNodes;
          let D, b, _, m, v, C;
          for (b = 0, _ = p.length; b < _; b++)
            if (((D = p[b]), 1 === D.nodeType)) {
              if (D['s-sr'])
                for (v = D['s-sn'], D.hidden = !1, m = 0; m < _; m++)
                  if (((C = p[m].nodeType), p[m]['s-hn'] !== D['s-hn'] || '' !== v)) {
                    if (1 === C && v === p[m].getAttribute('slot')) {
                      D.hidden = !0;
                      break;
                    }
                  } else if (1 === C || (3 === C && '' !== p[m].textContent.trim())) {
                    D.hidden = !0;
                    break;
                  }
              pi(D);
            }
        },
        hn = [],
        Es = (f) => {
          let p,
            D,
            b,
            _,
            m,
            v,
            C = 0;
          const P = f.childNodes,
            U = P.length;
          for (; C < U; C++) {
            if (((p = P[C]), p['s-sr'] && (D = p['s-cr']) && D.parentNode))
              for (b = D.parentNode.childNodes, _ = p['s-sn'], v = b.length - 1; v >= 0; v--)
                (D = b[v]),
                  !D['s-cn'] &&
                    !D['s-nr'] &&
                    D['s-hn'] !== p['s-hn'] &&
                    (Is(D, _)
                      ? ((m = hn.find((me) => me.$nodeToRelocate$ === D)),
                        (W = !0),
                        (D['s-sn'] = D['s-sn'] || _),
                        m ? (m.$slotRefNode$ = p) : hn.push({ $slotRefNode$: p, $nodeToRelocate$: D }),
                        D['s-sr'] &&
                          hn.map((me) => {
                            Is(me.$nodeToRelocate$, D['s-sn']) &&
                              ((m = hn.find((Ae) => Ae.$nodeToRelocate$ === D)),
                              m && !me.$slotRefNode$ && (me.$slotRefNode$ = m.$slotRefNode$));
                          }))
                      : hn.some((me) => me.$nodeToRelocate$ === D) || hn.push({ $nodeToRelocate$: D }));
            1 === p.nodeType && Es(p);
          }
        },
        Is = (f, p) =>
          1 === f.nodeType
            ? (null === f.getAttribute('slot') && '' === p) || f.getAttribute('slot') === p
            : f['s-sn'] === p || '' === p,
        Ss = (f) => {
          f.$attrs$ && f.$attrs$.ref && f.$attrs$.ref(null), f.$children$ && f.$children$.map(Ss);
        },
        No = (f) => pn(f).$hostElement$,
        gi = (f, p, D) => {
          const b = No(f);
          return {
            emit: (_) => Lo(b, p, { bubbles: !!(4 & D), composed: !!(2 & D), cancelable: !!(1 & D), detail: _ }),
          };
        },
        Lo = (f, p, D) => {
          const b = L.ce(p, D);
          return f.dispatchEvent(b), b;
        },
        $o = (f, p) => {
          p && !f.$onRenderResolve$ && p['s-p'] && p['s-p'].push(new Promise((D) => (f.$onRenderResolve$ = D)));
        },
        fo = (f, p) => {
          if (((f.$flags$ |= 16), !(4 & f.$flags$))) return $o(f, f.$ancestorComponent$), go(() => mi(f, p));
          f.$flags$ |= 512;
        },
        mi = (f, p) => {
          const b = f.$lazyInstance$;
          let _;
          return (
            p &&
              ((f.$flags$ |= 256),
              f.$queuedListeners$ && (f.$queuedListeners$.map(([m, v]) => Rt(b, m, v)), (f.$queuedListeners$ = null)),
              (_ = Rt(b, 'componentWillLoad'))),
            (_ = On(_, () => Rt(b, 'componentWillRender'))),
            On(_, () => vi(f, b, p))
          );
        },
        vi = (function () {
          var f = (0, N.Z)(function* (p, D, b) {
            const _ = p.$hostElement$,
              v = _['s-rc'];
            b &&
              ((f) => {
                const p = f.$cmpMeta$,
                  D = f.$hostElement$,
                  b = p.$flags$,
                  m = $(D.shadowRoot ? D.shadowRoot : D.getRootNode(), p, f.$modeName$);
                10 & b && ((D['s-sc'] = m), D.classList.add(m + '-h'), 2 & b && D.classList.add(m + '-s'));
              })(p);
            yi(p, D), v && (v.map((P) => P()), (_['s-rc'] = void 0));
            {
              const P = _['s-p'],
                U = () => Dr(p);
              0 === P.length ? U() : (Promise.all(P).then(U), (p.$flags$ |= 4), (P.length = 0));
            }
          });
          return function (D, b, _) {
            return f.apply(this, arguments);
          };
        })(),
        yi = (f, p, D) => {
          try {
            (p = p.render && p.render()),
              (f.$flags$ &= -17),
              (f.$flags$ |= 2),
              ((f, p) => {
                const D = f.$hostElement$,
                  b = f.$cmpMeta$,
                  _ = f.$vnode$ || mt(null, null),
                  m = ((f) => f && f.$tag$ === G)(p) ? p : ut(null, null, p);
                if (
                  ((ke = D.tagName),
                  b.$attrsToReflect$ &&
                    ((m.$attrs$ = m.$attrs$ || {}), b.$attrsToReflect$.map(([v, C]) => (m.$attrs$[C] = D[v]))),
                  (m.$tag$ = null),
                  (m.$flags$ |= 4),
                  (f.$vnode$ = m),
                  (m.$elm$ = _.$elm$ = D.shadowRoot || D),
                  (je = D['s-sc']),
                  (qe = D['s-cr']),
                  (Ke = 0 != (1 & b.$flags$)),
                  (W = !1),
                  _r(_, m),
                  (L.$flags$ |= 1),
                  Ie)
                ) {
                  Es(m.$elm$);
                  let v,
                    C,
                    P,
                    U,
                    me,
                    Ae,
                    Ne = 0;
                  for (; Ne < hn.length; Ne++)
                    (v = hn[Ne]),
                      (C = v.$nodeToRelocate$),
                      C['s-ol'] ||
                        ((P = Ee.createTextNode('')), (P['s-nr'] = C), C.parentNode.insertBefore((C['s-ol'] = P), C));
                  for (Ne = 0; Ne < hn.length; Ne++)
                    if (((v = hn[Ne]), (C = v.$nodeToRelocate$), v.$slotRefNode$)) {
                      for (
                        U = v.$slotRefNode$.parentNode, me = v.$slotRefNode$.nextSibling, P = C['s-ol'];
                        (P = P.previousSibling);

                      )
                        if (
                          ((Ae = P['s-nr']),
                          Ae &&
                            Ae['s-sn'] === C['s-sn'] &&
                            U === Ae.parentNode &&
                            ((Ae = Ae.nextSibling), !Ae || !Ae['s-nr']))
                        ) {
                          me = Ae;
                          break;
                        }
                      ((!me && U !== C.parentNode) || C.nextSibling !== me) &&
                        C !== me &&
                        (!C['s-hn'] && C['s-ol'] && (C['s-hn'] = C['s-ol'].parentNode.nodeName), U.insertBefore(C, me));
                    } else 1 === C.nodeType && (C.hidden = !0);
                }
                W && pi(m.$elm$), (L.$flags$ &= -2), (hn.length = 0);
              })(f, p);
          } catch (b) {
            qn(b, f.$hostElement$);
          }
          return null;
        },
        Dr = (f) => {
          const D = f.$hostElement$,
            _ = f.$lazyInstance$,
            m = f.$ancestorComponent$;
          Rt(_, 'componentDidRender'),
            64 & f.$flags$
              ? Rt(_, 'componentDidUpdate')
              : ((f.$flags$ |= 64), sr(D), Rt(_, 'componentDidLoad'), f.$onReadyResolve$(D), m || Cr()),
            f.$onInstanceResolve$(D),
            f.$onRenderResolve$ && (f.$onRenderResolve$(), (f.$onRenderResolve$ = void 0)),
            512 & f.$flags$ && wr(() => fo(f, !1)),
            (f.$flags$ &= -517);
        },
        $t = (f) => {
          {
            const p = pn(f),
              D = p.$hostElement$.isConnected;
            return D && 2 == (18 & p.$flags$) && fo(p, !1), D;
          }
        },
        Cr = (f) => {
          sr(Ee.documentElement), wr(() => Lo(Ue, 'appload', { detail: { namespace: 'ionic' } }));
        },
        Rt = (f, p, D) => {
          if (f && f[p])
            try {
              return f[p](D);
            } catch (b) {
              qn(b);
            }
        },
        On = (f, p) => (f && f.then ? f.then(p) : p()),
        sr = (f) => f.classList.add('hydrated'),
        Vo = (f, p, D, b, _, m, v) => {
          let C, P, U, me;
          if (1 === m.nodeType) {
            for (
              C = m.getAttribute('c-id'),
                C &&
                  ((P = C.split('.')),
                  (P[0] === v || '0' === P[0]) &&
                    ((U = {
                      $flags$: 0,
                      $hostId$: P[0],
                      $nodeId$: P[1],
                      $depth$: P[2],
                      $index$: P[3],
                      $tag$: m.tagName.toLowerCase(),
                      $elm$: m,
                      $attrs$: null,
                      $children$: null,
                      $key$: null,
                      $name$: null,
                      $text$: null,
                    }),
                    p.push(U),
                    m.removeAttribute('c-id'),
                    f.$children$ || (f.$children$ = []),
                    (f.$children$[U.$index$] = U),
                    (f = U),
                    b && '0' === U.$depth$ && (b[U.$index$] = U.$elm$))),
                me = m.childNodes.length - 1;
              me >= 0;
              me--
            )
              Vo(f, p, D, b, _, m.childNodes[me], v);
            if (m.shadowRoot)
              for (me = m.shadowRoot.childNodes.length - 1; me >= 0; me--)
                Vo(f, p, D, b, _, m.shadowRoot.childNodes[me], v);
          } else if (8 === m.nodeType)
            (P = m.nodeValue.split('.')),
              (P[1] === v || '0' === P[1]) &&
                ((C = P[0]),
                (U = {
                  $flags$: 0,
                  $hostId$: P[1],
                  $nodeId$: P[2],
                  $depth$: P[3],
                  $index$: P[4],
                  $elm$: m,
                  $attrs$: null,
                  $children$: null,
                  $key$: null,
                  $name$: null,
                  $tag$: null,
                  $text$: null,
                }),
                't' === C
                  ? ((U.$elm$ = m.nextSibling),
                    U.$elm$ &&
                      3 === U.$elm$.nodeType &&
                      ((U.$text$ = U.$elm$.textContent),
                      p.push(U),
                      m.remove(),
                      f.$children$ || (f.$children$ = []),
                      (f.$children$[U.$index$] = U),
                      b && '0' === U.$depth$ && (b[U.$index$] = U.$elm$)))
                  : U.$hostId$ === v &&
                    ('s' === C
                      ? ((U.$tag$ = 'slot'),
                        (m['s-sn'] = P[5] ? (U.$name$ = P[5]) : ''),
                        (m['s-sr'] = !0),
                        b &&
                          ((U.$elm$ = Ee.createElement(U.$tag$)),
                          U.$name$ && U.$elm$.setAttribute('name', U.$name$),
                          m.parentNode.insertBefore(U.$elm$, m),
                          m.remove(),
                          '0' === U.$depth$ && (b[U.$index$] = U.$elm$)),
                        D.push(U),
                        f.$children$ || (f.$children$ = []),
                        (f.$children$[U.$index$] = U))
                      : 'r' === C && (b ? m.remove() : ((_['s-cr'] = m), (m['s-cn'] = !0)))));
          else if (f && 'style' === f.$tag$) {
            const Ae = mt(null, m.textContent);
            (Ae.$elm$ = m), (Ae.$index$ = '0'), (f.$children$ = [Ae]);
          }
        },
        Bo = (f, p) => {
          if (1 === f.nodeType) {
            let D = 0;
            for (; D < f.childNodes.length; D++) Bo(f.childNodes[D], p);
            if (f.shadowRoot) for (D = 0; D < f.shadowRoot.childNodes.length; D++) Bo(f.shadowRoot.childNodes[D], p);
          } else if (8 === f.nodeType) {
            const D = f.nodeValue.split('.');
            'o' === D[0] && (p.set(D[1] + '.' + D[2], f), (f.nodeValue = ''), (f['s-en'] = D[3]));
          }
        },
        ar = (f, p, D) => {
          if (p.$members$) {
            f.watchers && (p.$watchers$ = f.watchers);
            const b = Object.entries(p.$members$),
              _ = f.prototype;
            if (
              (b.map(([m, [v]]) => {
                31 & v || (2 & D && 32 & v)
                  ? Object.defineProperty(_, m, {
                      get() {
                        return ((f, p) => pn(this).$instanceValues$.get(p))(0, m);
                      },
                      set(C) {
                        ((f, p, D, b) => {
                          const _ = pn(f),
                            m = _.$hostElement$,
                            v = _.$instanceValues$.get(p),
                            C = _.$flags$,
                            P = _.$lazyInstance$;
                          D = ((f, p) =>
                            null == f || pt(f)
                              ? f
                              : 4 & p
                              ? 'false' !== f && ('' === f || !!f)
                              : 2 & p
                              ? parseFloat(f)
                              : 1 & p
                              ? String(f)
                              : f)(D, b.$members$[p][0]);
                          const U = Number.isNaN(v) && Number.isNaN(D);
                          if ((!(8 & C) || void 0 === v) && D !== v && !U && (_.$instanceValues$.set(p, D), P)) {
                            if (b.$watchers$ && 128 & C) {
                              const Ae = b.$watchers$[p];
                              Ae &&
                                Ae.map((Ne) => {
                                  try {
                                    P[Ne](D, v, p);
                                  } catch (Mt) {
                                    qn(Mt, m);
                                  }
                                });
                            }
                            2 == (18 & C) && fo(_, !1);
                          }
                        })(this, m, C, p);
                      },
                      configurable: !0,
                      enumerable: !0,
                    })
                  : 1 & D &&
                    64 & v &&
                    Object.defineProperty(_, m, {
                      value(...C) {
                        const P = pn(this);
                        return P.$onInstancePromise$.then(() => P.$lazyInstance$[m](...C));
                      },
                    });
              }),
              1 & D)
            ) {
              const m = new Map();
              (_.attributeChangedCallback = function (v, C, P) {
                L.jmp(() => {
                  const U = m.get(v);
                  if (this.hasOwnProperty(U)) (P = this[U]), delete this[U];
                  else if (_.hasOwnProperty(U) && 'number' == typeof this[U] && this[U] == P) return;
                  this[U] = (null !== P || 'boolean' != typeof this[U]) && P;
                });
              }),
                (f.observedAttributes = b
                  .filter(([v, C]) => 15 & C[0])
                  .map(([v, C]) => {
                    const P = C[1] || v;
                    return m.set(P, v), 512 & C[0] && p.$attrsToReflect$.push([v, P]), P;
                  }));
            }
          }
          return f;
        },
        kn = (function () {
          var f = (0, N.Z)(function* (p, D, b, _, m) {
            if (0 == (32 & D.$flags$)) {
              {
                if (((D.$flags$ |= 32), (m = en(b)).then)) {
                  const U = () => {};
                  (m = yield m), U();
                }
                m.isProxied || ((b.$watchers$ = m.watchers), ar(m, b, 2), (m.isProxied = !0));
                const P = () => {};
                D.$flags$ |= 8;
                try {
                  new m(D);
                } catch (U) {
                  qn(U);
                }
                (D.$flags$ &= -9), (D.$flags$ |= 128), P(), As(D.$lazyInstance$);
              }
              if (m.style) {
                let P = m.style;
                'string' != typeof P && (P = P[(D.$modeName$ = ((f) => wi.map((p) => p(f)).find((p) => !!p))(p))]);
                const U = O(b, D.$modeName$);
                if (!ho.has(U)) {
                  const me = () => {};
                  Qe(U, P, !!(1 & b.$flags$)), me();
                }
              }
            }
            const v = D.$ancestorComponent$,
              C = () => fo(D, !0);
            v && v['s-rc'] ? v['s-rc'].push(C) : C();
          });
          return function (D, b, _, m, v) {
            return f.apply(this, arguments);
          };
        })(),
        As = (f) => {
          Rt(f, 'connectedCallback');
        },
        xs = (f) => {
          const p = (f['s-cr'] = Ee.createComment(''));
          (p['s-cn'] = !0), f.insertBefore(p, f.firstChild);
        },
        Di = (f, p = {}) => {
          const b = [],
            _ = p.exclude || [],
            m = Ue.customElements,
            v = Ee.head,
            C = v.querySelector('meta[charset]'),
            P = Ee.createElement('style'),
            U = [],
            me = Ee.querySelectorAll(`[${ue}]`);
          let Ae,
            Ne = !0,
            Mt = 0;
          for (
            Object.assign(L, p), L.$resourcesUrl$ = new URL(p.resourcesUrl || './', Ee.baseURI).href, L.$flags$ |= 2;
            Mt < me.length;
            Mt++
          )
            Qe(me[Mt].getAttribute(ue), q(me[Mt].innerHTML), !0);
          f.map((Kn) => {
            Kn[1].map((Yn) => {
              const Ht = { $flags$: Yn[0], $tagName$: Yn[1], $members$: Yn[2], $listeners$: Yn[3] };
              (Ht.$members$ = Yn[2]), (Ht.$listeners$ = Yn[3]), (Ht.$attrsToReflect$ = []), (Ht.$watchers$ = {});
              const Rs = Ht.$tagName$,
                Dp = class extends HTMLElement {
                  constructor(Os) {
                    super(Os),
                      bi((Os = this), Ht),
                      1 & Ht.$flags$ && Os.attachShadow({ mode: 'open', delegatesFocus: !!(16 & Ht.$flags$) });
                  }
                  connectedCallback() {
                    Ae && (clearTimeout(Ae), (Ae = null)),
                      Ne
                        ? U.push(this)
                        : L.jmp(() =>
                            ((f) => {
                              if (0 == (1 & L.$flags$)) {
                                const p = pn(f),
                                  D = p.$cmpMeta$,
                                  b = () => {};
                                if (1 & p.$flags$) E(f, p, D.$listeners$), As(p.$lazyInstance$);
                                else {
                                  let _;
                                  if (((p.$flags$ |= 1), (_ = f.getAttribute(oe)), _)) {
                                    if (1 & D.$flags$) {
                                      const m = $(f.shadowRoot, D, f.getAttribute('s-mode'));
                                      f.classList.remove(m + '-h', m + '-s');
                                    }
                                    ((f, p, D, b) => {
                                      const m = f.shadowRoot,
                                        v = [],
                                        P = m ? [] : null,
                                        U = (b.$vnode$ = mt(p, null));
                                      L.$orgLocNodes$ || Bo(Ee.body, (L.$orgLocNodes$ = new Map())),
                                        (f[oe] = D),
                                        f.removeAttribute(oe),
                                        Vo(U, v, [], P, f, f, D),
                                        v.map((me) => {
                                          const Ae = me.$hostId$ + '.' + me.$nodeId$,
                                            Ne = L.$orgLocNodes$.get(Ae),
                                            Mt = me.$elm$;
                                          Ne && '' === Ne['s-en'] && Ne.parentNode.insertBefore(Mt, Ne.nextSibling),
                                            m ||
                                              ((Mt['s-hn'] = p), Ne && ((Mt['s-ol'] = Ne), (Mt['s-ol']['s-nr'] = Mt))),
                                            L.$orgLocNodes$.delete(Ae);
                                        }),
                                        m &&
                                          P.map((me) => {
                                            me && m.appendChild(me);
                                          });
                                    })(f, D.$tagName$, _, p);
                                  }
                                  _ || (12 & D.$flags$ && xs(f));
                                  {
                                    let m = f;
                                    for (; (m = m.parentNode || m.host); )
                                      if ((1 === m.nodeType && m.hasAttribute('s-id') && m['s-p']) || m['s-p']) {
                                        $o(p, (p.$ancestorComponent$ = m));
                                        break;
                                      }
                                  }
                                  D.$members$ &&
                                    Object.entries(D.$members$).map(([m, [v]]) => {
                                      if (31 & v && f.hasOwnProperty(m)) {
                                        const C = f[m];
                                        delete f[m], (f[m] = C);
                                      }
                                    }),
                                    wr(() => kn(f, p, D));
                                }
                                b();
                              }
                            })(this),
                          );
                  }
                  disconnectedCallback() {
                    L.jmp(() =>
                      ((f) => {
                        if (0 == (1 & L.$flags$)) {
                          const p = pn(this),
                            D = p.$lazyInstance$;
                          p.$rmListeners$ && (p.$rmListeners$.map((b) => b()), (p.$rmListeners$ = void 0)),
                            Rt(D, 'disconnectedCallback');
                        }
                      })(),
                    );
                  }
                  componentOnReady() {
                    return pn(this).$onReadyPromise$;
                  }
                };
              (Ht.$lazyBundleId$ = Kn[0]), !_.includes(Rs) && !m.get(Rs) && (b.push(Rs), m.define(Rs, ar(Dp, Ht, 1)));
            });
          }),
            (P.innerHTML = b + '{visibility:hidden}.hydrated{visibility:inherit}'),
            P.setAttribute('data-styles', ''),
            v.insertBefore(P, C ? C.nextSibling : v.firstChild),
            (Ne = !1),
            U.length ? U.map((Kn) => Kn.connectedCallback()) : L.jmp(() => (Ae = setTimeout(Cr, 30)));
        },
        Vr = (f) => {
          const p = new URL(f, L.$resourcesUrl$);
          return p.origin !== Ue.location.origin ? p.href : p.pathname;
        },
        Wn = new WeakMap(),
        pn = (f) => Wn.get(f),
        Ci = (f, p) => Wn.set((p.$lazyInstance$ = f), p),
        bi = (f, p) => {
          const D = { $flags$: 0, $hostElement$: f, $cmpMeta$: p, $instanceValues$: new Map() };
          return (
            (D.$onInstancePromise$ = new Promise((b) => (D.$onInstanceResolve$ = b))),
            (D.$onReadyPromise$ = new Promise((b) => (D.$onReadyResolve$ = b))),
            (f['s-p'] = []),
            (f['s-rc'] = []),
            E(f, D, p.$listeners$),
            Wn.set(f, D)
          );
        },
        br = (f, p) => p in f,
        qn = (f, p) => (0, console.error)(f, p),
        Ho = new Map(),
        en = (f, p, D) => {
          const b = f.$tagName$.replace(/-/g, '_'),
            _ = f.$lazyBundleId$,
            m = Ho.get(_);
          return m ? m[b] : ae(863)(`./${_}.entry.js`).then((v) => (Ho.set(_, v), v[b]), qn);
        },
        ho = new Map(),
        wi = [],
        bt = [],
        Uo = [],
        Ei = (f, p) => (D) => {
          f.push(D), We || ((We = !0), p && 4 & L.$flags$ ? wr(at) : L.raf(at));
        },
        po = (f) => {
          for (let p = 0; p < f.length; p++)
            try {
              f[p](performance.now());
            } catch (D) {
              qn(D);
            }
          f.length = 0;
        },
        at = () => {
          po(bt), po(Uo), (We = bt.length > 0) && L.raf(at);
        },
        wr = (f) => pe().then(f),
        dt = Ei(bt, !1),
        go = Ei(Uo, !0),
        Fs = { isDev: !1, isBrowser: !0, isServer: !1, isTesting: !1 };
    },
    697: (qt, st, ae) => {
      'use strict';
      ae.d(st, {
        L: () => qe,
        a: () => ke,
        b: () => Ke,
        c: () => W,
        d: () => Ie,
        e: () => j,
        g: () => re,
        l: () => Me,
        s: () => oe,
        t: () => Ue,
      });
      var N = ae(5861),
        ze = ae(1308),
        je = ae(5730);
      const qe = 'ionViewWillEnter',
        ke = 'ionViewDidEnter',
        Ke = 'ionViewWillLeave',
        W = 'ionViewDidLeave',
        Ie = 'ionViewWillUnload',
        Ue = (H) =>
          new Promise((R, Z) => {
            (0, ze.c)(() => {
              Ee(H),
                L(H).then(
                  (Te) => {
                    Te.animation && Te.animation.destroy(), te(H), R(Te);
                  },
                  (Te) => {
                    te(H), Z(Te);
                  },
                );
            });
          }),
        Ee = (H) => {
          const R = H.enteringEl,
            Z = H.leavingEl;
          ue(R, Z, H.direction),
            H.showGoBack ? R.classList.add('can-go-back') : R.classList.remove('can-go-back'),
            oe(R, !1),
            R.style.setProperty('pointer-events', 'none'),
            Z && (oe(Z, !1), Z.style.setProperty('pointer-events', 'none'));
        },
        L = (function () {
          var H = (0, N.Z)(function* (R) {
            const Z = yield le(R);
            return Z && ze.B.isBrowser ? pe(Z, R) : k(R);
          });
          return function (Z) {
            return H.apply(this, arguments);
          };
        })(),
        te = (H) => {
          const R = H.enteringEl,
            Z = H.leavingEl;
          R.classList.remove('ion-page-invisible'),
            R.style.removeProperty('pointer-events'),
            void 0 !== Z && (Z.classList.remove('ion-page-invisible'), Z.style.removeProperty('pointer-events'));
        },
        le = (function () {
          var H = (0, N.Z)(function* (R) {
            return R.leavingEl && R.animated && 0 !== R.duration
              ? R.animationBuilder
                ? R.animationBuilder
                : 'ios' === R.mode
                ? (yield Promise.resolve().then(ae.bind(ae, 3953))).iosTransitionAnimation
                : (yield Promise.resolve().then(ae.bind(ae, 3880))).mdTransitionAnimation
              : void 0;
          });
          return function (Z) {
            return H.apply(this, arguments);
          };
        })(),
        pe = (function () {
          var H = (0, N.Z)(function* (R, Z) {
            yield E(Z, !0);
            const Te = R(Z.baseEl, Z);
            be(Z.enteringEl, Z.leavingEl);
            const xe = yield ge(Te, Z);
            return (
              Z.progressCallback && Z.progressCallback(void 0),
              xe && _e(Z.enteringEl, Z.leavingEl),
              { hasCompleted: xe, animation: Te }
            );
          });
          return function (Z, Te) {
            return H.apply(this, arguments);
          };
        })(),
        k = (function () {
          var H = (0, N.Z)(function* (R) {
            const Z = R.enteringEl,
              Te = R.leavingEl;
            return yield E(R, !1), be(Z, Te), _e(Z, Te), { hasCompleted: !0 };
          });
          return function (Z) {
            return H.apply(this, arguments);
          };
        })(),
        E = (function () {
          var H = (0, N.Z)(function* (R, Z) {
            const xe = (void 0 !== R.deepWait ? R.deepWait : Z)
              ? [j(R.enteringEl), j(R.leavingEl)]
              : [S(R.enteringEl), S(R.leavingEl)];
            yield Promise.all(xe), yield ne(R.viewIsReady, R.enteringEl);
          });
          return function (Z, Te) {
            return H.apply(this, arguments);
          };
        })(),
        ne = (function () {
          var H = (0, N.Z)(function* (R, Z) {
            R && (yield R(Z));
          });
          return function (Z, Te) {
            return H.apply(this, arguments);
          };
        })(),
        ge = (H, R) => {
          const Z = R.progressCallback,
            Te = new Promise((xe) => {
              H.onFinish((Qe) => xe(1 === Qe));
            });
          return Z ? (H.progressStart(!0), Z(H)) : H.play(), Te;
        },
        be = (H, R) => {
          Me(R, Ke), Me(H, qe);
        },
        _e = (H, R) => {
          Me(H, ke), Me(R, W);
        },
        Me = (H, R) => {
          if (H) {
            const Z = new CustomEvent(R, { bubbles: !1, cancelable: !1 });
            H.dispatchEvent(Z);
          }
        },
        S = (H) => (H ? new Promise((R) => (0, je.c)(H, R)) : Promise.resolve()),
        j = (function () {
          var H = (0, N.Z)(function* (R) {
            const Z = R;
            if (Z) {
              if (null != Z.componentOnReady) {
                if (null != (yield Z.componentOnReady())) return;
              } else if (null != Z.__registerHost) return void (yield new Promise((xe) => (0, je.r)(xe)));
              yield Promise.all(Array.from(Z.children).map(j));
            }
          });
          return function (Z) {
            return H.apply(this, arguments);
          };
        })(),
        oe = (H, R) => {
          R
            ? (H.setAttribute('aria-hidden', 'true'), H.classList.add('ion-page-hidden'))
            : ((H.hidden = !1), H.removeAttribute('aria-hidden'), H.classList.remove('ion-page-hidden'));
        },
        ue = (H, R, Z) => {
          void 0 !== H && (H.style.zIndex = 'back' === Z ? '99' : '101'), void 0 !== R && (R.style.zIndex = '100');
        },
        re = (H) =>
          H.classList.contains('ion-page')
            ? H
            : H.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs') || H;
    },
    1911: (qt, st, ae) => {
      'use strict';
      ae.r(st), ae.d(st, { GESTURE_CONTROLLER: () => N.G, createGesture: () => Ce });
      var N = ae(4349);
      const ze = (L, te, le, pe) => {
          const k = je(L) ? { capture: !!pe.capture, passive: !!pe.passive } : !!pe.capture;
          let E, ne;
          return (
            L.__zone_symbol__addEventListener
              ? ((E = '__zone_symbol__addEventListener'), (ne = '__zone_symbol__removeEventListener'))
              : ((E = 'addEventListener'), (ne = 'removeEventListener')),
            L[E](te, le, k),
            () => {
              L[ne](te, le, k);
            }
          );
        },
        je = (L) => {
          if (void 0 === qe)
            try {
              const te = Object.defineProperty({}, 'passive', {
                get: () => {
                  qe = !0;
                },
              });
              L.addEventListener('optsTest', () => {}, te);
            } catch {
              qe = !1;
            }
          return !!qe;
        };
      let qe;
      const W = (L) => (L instanceof Document ? L : L.ownerDocument),
        Ce = (L) => {
          let te = !1,
            le = !1,
            pe = !0,
            k = !1;
          const E = Object.assign(
              { disableScroll: !1, direction: 'x', gesturePriority: 0, passive: !0, maxAngle: 40, threshold: 10 },
              L,
            ),
            ne = E.canStart,
            ge = E.onWillStart,
            be = E.onStart,
            _e = E.onEnd,
            Me = E.notCaptured,
            S = E.onMove,
            j = E.threshold,
            oe = E.passive,
            ue = E.blurOnStart,
            re = {
              type: 'pan',
              startX: 0,
              startY: 0,
              startTime: 0,
              currentX: 0,
              currentY: 0,
              velocityX: 0,
              velocityY: 0,
              deltaX: 0,
              deltaY: 0,
              currentTime: 0,
              event: void 0,
              data: void 0,
            },
            H = ((L, te, le) => {
              const pe = le * (Math.PI / 180),
                k = 'x' === L,
                E = Math.cos(pe),
                ne = te * te;
              let ge = 0,
                be = 0,
                _e = !1,
                Me = 0;
              return {
                start(S, j) {
                  (ge = S), (be = j), (Me = 0), (_e = !0);
                },
                detect(S, j) {
                  if (!_e) return !1;
                  const oe = S - ge,
                    ue = j - be,
                    re = oe * oe + ue * ue;
                  if (re < ne) return !1;
                  const H = Math.sqrt(re),
                    R = (k ? oe : ue) / H;
                  return (Me = R > E ? 1 : R < -E ? -1 : 0), (_e = !1), !0;
                },
                isGesture: () => 0 !== Me,
                getDirection: () => Me,
              };
            })(E.direction, E.threshold, E.maxAngle),
            R = N.G.createGesture({ name: L.gestureName, priority: L.gesturePriority, disableScroll: L.disableScroll }),
            xe = () => {
              !te || ((k = !1), S && S(re));
            },
            Qe = () =>
              !!R.capture() &&
              ((te = !0),
              (pe = !1),
              (re.startX = re.currentX),
              (re.startY = re.currentY),
              (re.startTime = re.currentTime),
              ge ? ge(re).then(T) : T(),
              !0),
            T = () => {
              ue &&
                (() => {
                  if (typeof document < 'u') {
                    const M = document.activeElement;
                    M?.blur && M.blur();
                  }
                })(),
                be && be(re),
                (pe = !0);
            },
            O = () => {
              (te = !1), (le = !1), (k = !1), (pe = !0), R.release();
            },
            q = (M) => {
              const ee = te,
                Re = pe;
              if ((O(), Re)) {
                if ((We(re, M), ee)) return void (_e && _e(re));
                Me && Me(re);
              }
            },
            z = ((L, te, le, pe, k) => {
              let E,
                ne,
                ge,
                be,
                _e,
                Me,
                S,
                j = 0;
              const oe = ($) => {
                  (j = Date.now() + 2e3),
                    te($) &&
                      (!ne && le && (ne = ze(L, 'touchmove', le, k)),
                      ge || (ge = ze($.target, 'touchend', re, k)),
                      be || (be = ze($.target, 'touchcancel', re, k)));
                },
                ue = ($) => {
                  j > Date.now() ||
                    !te($) ||
                    (!Me && le && (Me = ze(W(L), 'mousemove', le, k)), S || (S = ze(W(L), 'mouseup', H, k)));
                },
                re = ($) => {
                  R(), pe && pe($);
                },
                H = ($) => {
                  Z(), pe && pe($);
                },
                R = () => {
                  ne && ne(), ge && ge(), be && be(), (ne = ge = be = void 0);
                },
                Z = () => {
                  Me && Me(), S && S(), (Me = S = void 0);
                },
                Te = () => {
                  R(), Z();
                },
                xe = ($ = !0) => {
                  $
                    ? (E || (E = ze(L, 'touchstart', oe, k)), _e || (_e = ze(L, 'mousedown', ue, k)))
                    : (E && E(), _e && _e(), (E = _e = void 0), Te());
                };
              return {
                enable: xe,
                stop: Te,
                destroy: () => {
                  xe(!1), (pe = le = te = void 0);
                },
              };
            })(
              E.el,
              (M) => {
                const ee = Ee(M);
                return (
                  !(
                    le ||
                    !pe ||
                    (Ue(M, re),
                    (re.startX = re.currentX),
                    (re.startY = re.currentY),
                    (re.startTime = re.currentTime = ee),
                    (re.velocityX = re.velocityY = re.deltaX = re.deltaY = 0),
                    (re.event = M),
                    ne && !1 === ne(re)) ||
                    (R.release(), !R.start())
                  ) && ((le = !0), 0 === j ? Qe() : (H.start(re.startX, re.startY), !0))
                );
              },
              (M) => {
                te
                  ? !k && pe && ((k = !0), We(re, M), requestAnimationFrame(xe))
                  : (We(re, M), H.detect(re.currentX, re.currentY) && (!H.isGesture() || !Qe()) && x());
              },
              q,
              { capture: !1, passive: oe },
            ),
            x = () => {
              O(), z.stop(), Me && Me(re);
            };
          return {
            enable(M = !0) {
              M || (te && q(void 0), O()), z.enable(M);
            },
            destroy() {
              R.destroy(), z.destroy();
            },
          };
        },
        We = (L, te) => {
          if (!te) return;
          const le = L.currentX,
            pe = L.currentY,
            k = L.currentTime;
          Ue(te, L);
          const E = L.currentX,
            ne = L.currentY,
            be = (L.currentTime = Ee(te)) - k;
          if (be > 0 && be < 100) {
            const Me = (ne - pe) / be;
            (L.velocityX = ((E - le) / be) * 0.7 + 0.3 * L.velocityX), (L.velocityY = 0.7 * Me + 0.3 * L.velocityY);
          }
          (L.deltaX = E - L.startX), (L.deltaY = ne - L.startY), (L.event = te);
        },
        Ue = (L, te) => {
          let le = 0,
            pe = 0;
          if (L) {
            const k = L.changedTouches;
            if (k && k.length > 0) {
              const E = k[0];
              (le = E.clientX), (pe = E.clientY);
            } else void 0 !== L.pageX && ((le = L.pageX), (pe = L.pageY));
          }
          (te.currentX = le), (te.currentY = pe);
        },
        Ee = (L) => L.timeStamp || Date.now();
    },
    9658: (qt, st, ae) => {
      'use strict';
      ae.d(st, { a: () => Ue, b: () => xe, c: () => je, g: () => We, i: () => Qe });
      var N = ae(1308);
      class ze {
        constructor() {
          this.m = new Map();
        }
        reset(T) {
          this.m = new Map(Object.entries(T));
        }
        get(T, O) {
          const q = this.m.get(T);
          return void 0 !== q ? q : O;
        }
        getBoolean(T, O = !1) {
          const q = this.m.get(T);
          return void 0 === q ? O : 'string' == typeof q ? 'true' === q : !!q;
        }
        getNumber(T, O) {
          const q = parseFloat(this.m.get(T));
          return isNaN(q) ? (void 0 !== O ? O : NaN) : q;
        }
        set(T, O) {
          this.m.set(T, O);
        }
      }
      const je = new ze(),
        Ce = 'ionic-persist-config',
        We = ($) => Ee($),
        Ue = ($, T) => ('string' == typeof $ && ((T = $), ($ = void 0)), We($).includes(T)),
        Ee = ($ = window) => {
          if (typeof $ > 'u') return [];
          $.Ionic = $.Ionic || {};
          let T = $.Ionic.platforms;
          return (
            null == T &&
              ((T = $.Ionic.platforms = L($)), T.forEach((O) => $.document.documentElement.classList.add(`plt-${O}`))),
            T
          );
        },
        L = ($) => {
          const T = je.get('platform');
          return Object.keys(Z).filter((O) => {
            const q = T?.[O];
            return 'function' == typeof q ? q($) : Z[O]($);
          });
        },
        le = ($) => !!(H($, /iPad/i) || (H($, /Macintosh/i) && _e($))),
        E = ($) => H($, /android|sink/i),
        _e = ($) => R($, '(any-pointer:coarse)'),
        S = ($) => j($) || oe($),
        j = ($) => !!($.cordova || $.phonegap || $.PhoneGap),
        oe = ($) => !!$.Capacitor?.isNative,
        H = ($, T) => T.test($.navigator.userAgent),
        R = ($, T) => {
          var O;
          return null === (O = $.matchMedia) || void 0 === O ? void 0 : O.call($, T).matches;
        },
        Z = {
          ipad: le,
          iphone: ($) => H($, /iPhone/i),
          ios: ($) => H($, /iPhone|iPod/i) || le($),
          android: E,
          phablet: ($) => {
            const T = $.innerWidth,
              O = $.innerHeight,
              q = Math.min(T, O),
              z = Math.max(T, O);
            return q > 390 && q < 520 && z > 620 && z < 800;
          },
          tablet: ($) => {
            const T = $.innerWidth,
              O = $.innerHeight,
              q = Math.min(T, O),
              z = Math.max(T, O);
            return le($) || (($) => E($) && !H($, /mobile/i))($) || (q > 460 && q < 820 && z > 780 && z < 1400);
          },
          cordova: j,
          capacitor: oe,
          electron: ($) => H($, /electron/i),
          pwa: ($) => {
            var T;
            return !(
              !(null === (T = $.matchMedia) || void 0 === T
                ? void 0
                : T.call($, '(display-mode: standalone)').matches) && !$.navigator.standalone
            );
          },
          mobile: _e,
          mobileweb: ($) => _e($) && !S($),
          desktop: ($) => !_e($),
          hybrid: S,
        };
      let Te;
      const xe = ($) => ($ && (0, N.g)($)) || Te,
        Qe = ($ = {}) => {
          if (typeof window > 'u') return;
          const T = window.document,
            O = window,
            q = (O.Ionic = O.Ionic || {}),
            z = {};
          $._ael && (z.ael = $._ael), $._rel && (z.rel = $._rel), $._ce && (z.ce = $._ce), (0, N.s)(z);
          const x = Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    (($) => {
                      try {
                        const T = $.sessionStorage.getItem(Ce);
                        return null !== T ? JSON.parse(T) : {};
                      } catch {
                        return {};
                      }
                    })(O),
                  ),
                  { persistConfig: !1 },
                ),
                q.config,
              ),
              (($) => {
                const T = {};
                return (
                  $.location.search
                    .slice(1)
                    .split('&')
                    .map((O) => O.split('='))
                    .map(([O, q]) => [decodeURIComponent(O), decodeURIComponent(q)])
                    .filter(([O]) => (($, T) => $.substr(0, T.length) === T)(O, 'ionic:'))
                    .map(([O, q]) => [O.slice('ionic:'.length), q])
                    .forEach(([O, q]) => {
                      T[O] = q;
                    }),
                  T
                );
              })(O),
            ),
            $,
          );
          je.reset(x),
            je.getBoolean('persistConfig') &&
              (($, T) => {
                try {
                  $.sessionStorage.setItem(Ce, JSON.stringify(T));
                } catch {
                  return;
                }
              })(O, x),
            Ee(O),
            (q.config = je),
            (q.mode = Te = je.get('mode', T.documentElement.getAttribute('mode') || (Ue(O, 'ios') ? 'ios' : 'md'))),
            je.set('mode', Te),
            T.documentElement.setAttribute('mode', Te),
            T.documentElement.classList.add(Te),
            je.getBoolean('_testing') && je.set('animated', !1);
          const M = (Re) => {
              var K;
              return null === (K = Re.tagName) || void 0 === K ? void 0 : K.startsWith('ION-');
            },
            ee = (Re) => ['ios', 'md'].includes(Re);
          (0, N.a)((Re) => {
            for (; Re; ) {
              const K = Re.mode || Re.getAttribute('mode');
              if (K) {
                if (ee(K)) return K;
                M(Re) && console.warn('Invalid ionic mode: "' + K + '", expected: "ios" or "md"');
              }
              Re = Re.parentElement;
            }
            return Te;
          });
        };
    },
    3953: (qt, st, ae) => {
      'use strict';
      ae.r(st), ae.d(st, { iosTransitionAnimation: () => L, shadow: () => W });
      var N = ae(8834),
        ze = ae(697);
      ae(3457), ae(1308);
      const Ke = (te) => document.querySelector(`${te}.ion-cloned-element`),
        W = (te) => te.shadowRoot || te,
        Ie = (te) => {
          const le = 'ION-TABS' === te.tagName ? te : te.querySelector('ion-tabs'),
            pe = 'ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large';
          if (null != le) {
            const k = le.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');
            return null != k ? k.querySelector(pe) : null;
          }
          return te.querySelector(pe);
        },
        Ce = (te, le) => {
          const pe = 'ION-TABS' === te.tagName ? te : te.querySelector('ion-tabs');
          let k = [];
          if (null != pe) {
            const E = pe.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');
            null != E && (k = E.querySelectorAll('ion-buttons'));
          } else k = te.querySelectorAll('ion-buttons');
          for (const E of k) {
            const ne = E.closest('ion-header'),
              ge = ne && !ne.classList.contains('header-collapse-condense-inactive'),
              be = E.querySelector('ion-back-button'),
              _e = E.classList.contains('buttons-collapse'),
              Me = 'start' === E.slot || '' === E.slot;
            if (null !== be && Me && ((_e && ge && le) || !_e)) return be;
          }
          return null;
        },
        Ue = (te, le, pe, k, E, ne) => {
          const ge = le ? `calc(100% - ${ne.right + 4}px)` : ne.left - 4 + 'px',
            be = le ? '7px' : '-7px',
            _e = le ? '-4px' : '4px',
            Me = le ? '-4px' : '4px',
            S = le ? 'right' : 'left',
            j = le ? 'left' : 'right',
            re = pe
              ? [
                  { offset: 0, opacity: 1, transform: `translate3d(${_e}, ${ne.top - 46}px, 0) scale(1)` },
                  { offset: 0.6, opacity: 0 },
                  { offset: 1, opacity: 0, transform: `translate3d(${be}, ${E.top - 40}px, 0) scale(2.1)` },
                ]
              : [
                  { offset: 0, opacity: 0, transform: `translate3d(${be}, ${E.top - 40}px, 0) scale(2.1)` },
                  { offset: 1, opacity: 1, transform: `translate3d(${_e}, ${ne.top - 46}px, 0) scale(1)` },
                ],
            Z = pe
              ? [
                  { offset: 0, opacity: 1, transform: `translate3d(${Me}, ${ne.top - 46}px, 0) scale(1)` },
                  { offset: 0.2, opacity: 0, transform: `translate3d(${Me}, ${ne.top - 41}px, 0) scale(0.6)` },
                  { offset: 1, opacity: 0, transform: `translate3d(${Me}, ${ne.top - 41}px, 0) scale(0.6)` },
                ]
              : [
                  { offset: 0, opacity: 0, transform: `translate3d(${Me}, ${ne.top - 41}px, 0) scale(0.6)` },
                  { offset: 1, opacity: 1, transform: `translate3d(${Me}, ${ne.top - 46}px, 0) scale(1)` },
                ],
            Te = (0, N.c)(),
            xe = (0, N.c)(),
            Qe = Ke('ion-back-button'),
            $ = W(Qe).querySelector('.button-text'),
            T = W(Qe).querySelector('ion-icon');
          (Qe.text = k.text),
            (Qe.mode = k.mode),
            (Qe.icon = k.icon),
            (Qe.color = k.color),
            (Qe.disabled = k.disabled),
            Qe.style.setProperty('display', 'block'),
            Qe.style.setProperty('position', 'fixed'),
            xe.addElement(T),
            Te.addElement($),
            Te.beforeStyles({ 'transform-origin': `${S} center` })
              .beforeAddWrite(() => {
                k.style.setProperty('display', 'none'), Qe.style.setProperty(S, ge);
              })
              .afterAddWrite(() => {
                k.style.setProperty('display', ''), Qe.style.setProperty('display', 'none'), Qe.style.removeProperty(S);
              })
              .keyframes(re),
            xe.beforeStyles({ 'transform-origin': `${j} center` }).keyframes(Z),
            te.addAnimation([Te, xe]);
        },
        Ee = (te, le, pe, k, E, ne) => {
          const ge = le ? `calc(100% - ${E.right}px)` : `${E.left}px`,
            be = le ? '-18px' : '18px',
            _e = le ? 'right' : 'left',
            j = pe
              ? [
                  { offset: 0, opacity: 0, transform: `translate3d(${be}, ${ne.top - 4}px, 0) scale(0.49)` },
                  { offset: 0.1, opacity: 0 },
                  { offset: 1, opacity: 1, transform: `translate3d(0, ${E.top - 2}px, 0) scale(1)` },
                ]
              : [
                  { offset: 0, opacity: 0.99, transform: `translate3d(0, ${E.top - 2}px, 0) scale(1)` },
                  { offset: 0.6, opacity: 0 },
                  { offset: 1, opacity: 0, transform: `translate3d(${be}, ${ne.top - 4}px, 0) scale(0.5)` },
                ],
            oe = Ke('ion-title'),
            ue = (0, N.c)();
          (oe.innerText = k.innerText),
            (oe.size = k.size),
            (oe.color = k.color),
            ue.addElement(oe),
            ue
              .beforeStyles({
                'transform-origin': `${_e} center`,
                'height': '46px',
                'display': '',
                'position': 'relative',
                [_e]: ge,
              })
              .beforeAddWrite(() => {
                k.style.setProperty('display', 'none');
              })
              .afterAddWrite(() => {
                k.style.setProperty('display', ''), oe.style.setProperty('display', 'none');
              })
              .keyframes(j),
            te.addAnimation(ue);
        },
        L = (te, le) => {
          var pe;
          try {
            const k = 'cubic-bezier(0.32,0.72,0,1)',
              E = 'opacity',
              ne = 'transform',
              ge = '0%',
              _e = 'rtl' === te.ownerDocument.dir,
              Me = _e ? '-99.5%' : '99.5%',
              S = _e ? '33%' : '-33%',
              j = le.enteringEl,
              oe = le.leavingEl,
              ue = 'back' === le.direction,
              re = j.querySelector(':scope > ion-content'),
              H = j.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'),
              R = j.querySelectorAll(':scope > ion-header > ion-toolbar'),
              Z = (0, N.c)(),
              Te = (0, N.c)();
            if (
              (Z.addElement(j)
                .duration((null !== (pe = le.duration) && void 0 !== pe ? pe : 0) || 540)
                .easing(le.easing || k)
                .fill('both')
                .beforeRemoveClass('ion-page-invisible'),
              oe && null != te)
            ) {
              const T = (0, N.c)();
              T.addElement(te), Z.addAnimation(T);
            }
            if (
              (re || 0 !== R.length || 0 !== H.length
                ? (Te.addElement(re), Te.addElement(H))
                : Te.addElement(j.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')),
              Z.addAnimation(Te),
              ue
                ? Te.beforeClearStyles([E])
                    .fromTo('transform', `translateX(${S})`, `translateX(${ge})`)
                    .fromTo(E, 0.8, 1)
                : Te.beforeClearStyles([E]).fromTo('transform', `translateX(${Me})`, `translateX(${ge})`),
              re)
            ) {
              const T = W(re).querySelector('.transition-effect');
              if (T) {
                const O = T.querySelector('.transition-cover'),
                  q = T.querySelector('.transition-shadow'),
                  z = (0, N.c)(),
                  x = (0, N.c)(),
                  M = (0, N.c)();
                z
                  .addElement(T)
                  .beforeStyles({ opacity: '1', display: 'block' })
                  .afterStyles({ opacity: '', display: '' }),
                  x.addElement(O).beforeClearStyles([E]).fromTo(E, 0, 0.1),
                  M.addElement(q).beforeClearStyles([E]).fromTo(E, 0.03, 0.7),
                  z.addAnimation([x, M]),
                  Te.addAnimation([z]);
              }
            }
            const xe = j.querySelector('ion-header.header-collapse-condense'),
              { forward: Qe, backward: $ } = ((te, le, pe, k, E) => {
                const ne = Ce(k, pe),
                  ge = Ie(E),
                  be = Ie(k),
                  _e = Ce(E, pe),
                  Me = null !== ne && null !== ge && !pe,
                  S = null !== be && null !== _e && pe;
                if (Me) {
                  const j = ge.getBoundingClientRect(),
                    oe = ne.getBoundingClientRect();
                  Ee(te, le, pe, ge, j, oe), Ue(te, le, pe, ne, j, oe);
                } else if (S) {
                  const j = be.getBoundingClientRect(),
                    oe = _e.getBoundingClientRect();
                  Ee(te, le, pe, be, j, oe), Ue(te, le, pe, _e, j, oe);
                }
                return { forward: Me, backward: S };
              })(Z, _e, ue, j, oe);
            if (
              (R.forEach((T) => {
                const O = (0, N.c)();
                O.addElement(T), Z.addAnimation(O);
                const q = (0, N.c)();
                q.addElement(T.querySelector('ion-title'));
                const z = (0, N.c)(),
                  x = Array.from(T.querySelectorAll('ion-buttons,[menuToggle]')),
                  M = T.closest('ion-header'),
                  ee = M?.classList.contains('header-collapse-condense-inactive');
                let Re;
                (Re = x.filter(
                  ue
                    ? (mt) => {
                        const G = mt.classList.contains('buttons-collapse');
                        return (G && !ee) || !G;
                      }
                    : (mt) => !mt.classList.contains('buttons-collapse'),
                )),
                  z.addElement(Re);
                const K = (0, N.c)();
                K.addElement(T.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
                const Ze = (0, N.c)();
                Ze.addElement(W(T).querySelector('.toolbar-background'));
                const pt = (0, N.c)(),
                  ut = T.querySelector('ion-back-button');
                if (
                  (ut && pt.addElement(ut),
                  O.addAnimation([q, z, K, Ze, pt]),
                  z.fromTo(E, 0.01, 1),
                  K.fromTo(E, 0.01, 1),
                  ue)
                )
                  ee || q.fromTo('transform', `translateX(${S})`, `translateX(${ge})`).fromTo(E, 0.01, 1),
                    K.fromTo('transform', `translateX(${S})`, `translateX(${ge})`),
                    pt.fromTo(E, 0.01, 1);
                else if (
                  (xe || q.fromTo('transform', `translateX(${Me})`, `translateX(${ge})`).fromTo(E, 0.01, 1),
                  K.fromTo('transform', `translateX(${Me})`, `translateX(${ge})`),
                  Ze.beforeClearStyles([E, 'transform']),
                  M?.translucent
                    ? Ze.fromTo('transform', _e ? 'translateX(-100%)' : 'translateX(100%)', 'translateX(0px)')
                    : Ze.fromTo(E, 0.01, 'var(--opacity)'),
                  Qe || pt.fromTo(E, 0.01, 1),
                  ut && !Qe)
                ) {
                  const G = (0, N.c)();
                  G.addElement(W(ut).querySelector('.button-text')).fromTo(
                    'transform',
                    _e ? 'translateX(-100px)' : 'translateX(100px)',
                    'translateX(0px)',
                  ),
                    O.addAnimation(G);
                }
              }),
              oe)
            ) {
              const T = (0, N.c)(),
                O = oe.querySelector(':scope > ion-content'),
                q = oe.querySelectorAll(':scope > ion-header > ion-toolbar'),
                z = oe.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
              if (
                (O || 0 !== q.length || 0 !== z.length
                  ? (T.addElement(O), T.addElement(z))
                  : T.addElement(oe.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')),
                Z.addAnimation(T),
                ue)
              ) {
                T.beforeClearStyles([E]).fromTo(
                  'transform',
                  `translateX(${ge})`,
                  _e ? 'translateX(-100%)' : 'translateX(100%)',
                );
                const x = (0, ze.g)(oe);
                Z.afterAddWrite(() => {
                  'normal' === Z.getDirection() && x.style.setProperty('display', 'none');
                });
              } else T.fromTo('transform', `translateX(${ge})`, `translateX(${S})`).fromTo(E, 1, 0.8);
              if (O) {
                const x = W(O).querySelector('.transition-effect');
                if (x) {
                  const M = x.querySelector('.transition-cover'),
                    ee = x.querySelector('.transition-shadow'),
                    Re = (0, N.c)(),
                    K = (0, N.c)(),
                    Ze = (0, N.c)();
                  Re.addElement(x)
                    .beforeStyles({ opacity: '1', display: 'block' })
                    .afterStyles({ opacity: '', display: '' }),
                    K.addElement(M).beforeClearStyles([E]).fromTo(E, 0.1, 0),
                    Ze.addElement(ee).beforeClearStyles([E]).fromTo(E, 0.7, 0.03),
                    Re.addAnimation([K, Ze]),
                    T.addAnimation([Re]);
                }
              }
              q.forEach((x) => {
                const M = (0, N.c)();
                M.addElement(x);
                const ee = (0, N.c)();
                ee.addElement(x.querySelector('ion-title'));
                const Re = (0, N.c)(),
                  K = x.querySelectorAll('ion-buttons,[menuToggle]'),
                  Ze = x.closest('ion-header'),
                  pt = Ze?.classList.contains('header-collapse-condense-inactive'),
                  ut = Array.from(K).filter((lo) => {
                    const Sn = lo.classList.contains('buttons-collapse');
                    return (Sn && !pt) || !Sn;
                  });
                Re.addElement(ut);
                const mt = (0, N.c)(),
                  G = x.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');
                G.length > 0 && mt.addElement(G);
                const St = (0, N.c)();
                St.addElement(W(x).querySelector('.toolbar-background'));
                const ir = (0, N.c)(),
                  In = x.querySelector('ion-back-button');
                if (
                  (In && ir.addElement(In),
                  M.addAnimation([ee, Re, mt, ir, St]),
                  Z.addAnimation(M),
                  ir.fromTo(E, 0.99, 0),
                  Re.fromTo(E, 0.99, 0),
                  mt.fromTo(E, 0.99, 0),
                  ue)
                ) {
                  if (
                    (pt ||
                      ee
                        .fromTo('transform', `translateX(${ge})`, _e ? 'translateX(-100%)' : 'translateX(100%)')
                        .fromTo(E, 0.99, 0),
                    mt.fromTo('transform', `translateX(${ge})`, _e ? 'translateX(-100%)' : 'translateX(100%)'),
                    St.beforeClearStyles([E, 'transform']),
                    Ze?.translucent
                      ? St.fromTo('transform', 'translateX(0px)', _e ? 'translateX(-100%)' : 'translateX(100%)')
                      : St.fromTo(E, 'var(--opacity)', 0),
                    In && !$)
                  ) {
                    const Sn = (0, N.c)();
                    Sn.addElement(W(In).querySelector('.button-text')).fromTo(
                      'transform',
                      `translateX(${ge})`,
                      `translateX(${(_e ? -124 : 124) + 'px'})`,
                    ),
                      M.addAnimation(Sn);
                  }
                } else
                  pt ||
                    ee
                      .fromTo('transform', `translateX(${ge})`, `translateX(${S})`)
                      .fromTo(E, 0.99, 0)
                      .afterClearStyles([ne, E]),
                    mt.fromTo('transform', `translateX(${ge})`, `translateX(${S})`).afterClearStyles([ne, E]),
                    ir.afterClearStyles([E]),
                    ee.afterClearStyles([E]),
                    Re.afterClearStyles([E]);
              });
            }
            return Z;
          } catch (k) {
            throw k;
          }
        };
    },
    3880: (qt, st, ae) => {
      'use strict';
      ae.r(st), ae.d(st, { mdTransitionAnimation: () => ke });
      var N = ae(8834),
        ze = ae(697);
      ae(3457), ae(1308);
      const ke = (Ke, W) => {
        var Ie, Ce, We;
        const L = 'back' === W.direction,
          le = W.leavingEl,
          pe = (0, ze.g)(W.enteringEl),
          k = pe.querySelector('ion-toolbar'),
          E = (0, N.c)();
        if (
          (E.addElement(pe).fill('both').beforeRemoveClass('ion-page-invisible'),
          L
            ? E.duration((null !== (Ie = W.duration) && void 0 !== Ie ? Ie : 0) || 200).easing(
                'cubic-bezier(0.47,0,0.745,0.715)',
              )
            : E.duration((null !== (Ce = W.duration) && void 0 !== Ce ? Ce : 0) || 280)
                .easing('cubic-bezier(0.36,0.66,0.04,1)')
                .fromTo('transform', 'translateY(40px)', 'translateY(0px)')
                .fromTo('opacity', 0.01, 1),
          k)
        ) {
          const ne = (0, N.c)();
          ne.addElement(k), E.addAnimation(ne);
        }
        if (le && L) {
          E.duration((null !== (We = W.duration) && void 0 !== We ? We : 0) || 200).easing(
            'cubic-bezier(0.47,0,0.745,0.715)',
          );
          const ne = (0, N.c)();
          ne
            .addElement((0, ze.g)(le))
            .onFinish((ge) => {
              1 === ge && ne.elements.length > 0 && ne.elements[0].style.setProperty('display', 'none');
            })
            .fromTo('transform', 'translateY(0px)', 'translateY(40px)')
            .fromTo('opacity', 1, 0),
            E.addAnimation(ne);
        }
        return E;
      };
    },
    1312: (qt, st, ae) => {
      'use strict';
      ae.d(st, {
        B: () => O,
        G: () => q,
        a: () => Ie,
        b: () => Ce,
        c: () => L,
        d: () => ue,
        e: () => le,
        f: () => H,
        g: () => Te,
        h: () => Ke,
        i: () => Qe,
        j: () => E,
        k: () => j,
        m: () => Ue,
        s: () => T,
      });
      var N = ae(5861),
        ze = ae(9658),
        je = ae(7593),
        qe = ae(5730);
      let ke = 0;
      const Ke = new WeakMap(),
        W = (z) => ({
          create: (x) => pe(z, x),
          dismiss: (x, M, ee) => Me(document, x, M, z, ee),
          getTop: () =>
            (0, N.Z)(function* () {
              return j(document, z);
            })(),
        }),
        Ie = W('ion-alert'),
        Ce = W('ion-action-sheet'),
        Ue = W('ion-modal'),
        L = W('ion-popover'),
        le = (z) => {
          typeof document < 'u' && _e(document);
          const x = ke++;
          (z.overlayIndex = x), z.hasAttribute('id') || (z.id = `ion-overlay-${x}`);
        },
        pe = (z, x) =>
          typeof window < 'u' && typeof window.customElements < 'u'
            ? window.customElements.whenDefined(z).then(() => {
                const M = document.createElement(z);
                return (
                  M.classList.add('overlay-hidden'),
                  Object.assign(M, Object.assign(Object.assign({}, x), { hasController: !0 })),
                  R(document).appendChild(M),
                  new Promise((ee) => (0, qe.c)(M, ee))
                );
              })
            : Promise.resolve(),
        k =
          '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',
        E = (z, x) => {
          let M = z.querySelector(k);
          const ee = M?.shadowRoot;
          ee && (M = ee.querySelector(k) || M), M ? (0, qe.f)(M) : x.focus();
        },
        ge = (z, x) => {
          const M = Array.from(z.querySelectorAll(k));
          let ee = M.length > 0 ? M[M.length - 1] : null;
          const Re = ee?.shadowRoot;
          Re && (ee = Re.querySelector(k) || ee), ee ? ee.focus() : x.focus();
        },
        _e = (z) => {
          0 === ke &&
            ((ke = 1),
            z.addEventListener(
              'focus',
              (x) => {
                ((z, x) => {
                  const M = j(x, 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover'),
                    ee = z.target;
                  M &&
                    ee &&
                    !M.classList.contains('ion-disable-focus-trap') &&
                    (M.shadowRoot
                      ? (() => {
                          if (M.contains(ee)) M.lastFocus = ee;
                          else {
                            const Ze = M.lastFocus;
                            E(M, M), Ze === x.activeElement && ge(M, M), (M.lastFocus = x.activeElement);
                          }
                        })()
                      : (() => {
                          if (M === ee) M.lastFocus = void 0;
                          else {
                            const Ze = (0, qe.g)(M);
                            if (!Ze.contains(ee)) return;
                            const pt = Ze.querySelector('.ion-overlay-wrapper');
                            if (!pt) return;
                            if (pt.contains(ee)) M.lastFocus = ee;
                            else {
                              const ut = M.lastFocus;
                              E(pt, M), ut === x.activeElement && ge(pt, M), (M.lastFocus = x.activeElement);
                            }
                          }
                        })());
                })(x, z);
              },
              !0,
            ),
            z.addEventListener('ionBackButton', (x) => {
              const M = j(z);
              M?.backdropDismiss && x.detail.register(je.OVERLAY_BACK_BUTTON_PRIORITY, () => M.dismiss(void 0, O));
            }),
            z.addEventListener('keyup', (x) => {
              if ('Escape' === x.key) {
                const M = j(z);
                M?.backdropDismiss && M.dismiss(void 0, O);
              }
            }));
        },
        Me = (z, x, M, ee, Re) => {
          const K = j(z, ee, Re);
          return K ? K.dismiss(x, M) : Promise.reject('overlay does not exist');
        },
        j = (z, x, M) => {
          const ee = ((z, x) => (
            void 0 === x && (x = 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast'),
            Array.from(z.querySelectorAll(x)).filter((M) => M.overlayIndex > 0)
          ))(z, x).filter((Re) => !((z) => z.classList.contains('overlay-hidden'))(Re));
          return void 0 === M ? ee[ee.length - 1] : ee.find((Re) => Re.id === M);
        },
        oe = (z = !1) => {
          const M = R(document).querySelector('ion-router-outlet, ion-nav, #ion-view-container-root');
          !M || (z ? M.setAttribute('aria-hidden', 'true') : M.removeAttribute('aria-hidden'));
        },
        ue = (function () {
          var z = (0, N.Z)(function* (x, M, ee, Re, K) {
            var Ze, pt;
            if (x.presented) return;
            oe(!0),
              (x.presented = !0),
              x.willPresent.emit(),
              null === (Ze = x.willPresentShorthand) || void 0 === Ze || Ze.emit();
            const ut = (0, ze.b)(x),
              mt = x.enterAnimation ? x.enterAnimation : ze.c.get(M, 'ios' === ut ? ee : Re);
            (yield Z(x, mt, x.el, K)) &&
              (x.didPresent.emit(), null === (pt = x.didPresentShorthand) || void 0 === pt || pt.emit()),
              'ION-TOAST' !== x.el.tagName && re(x.el),
              x.keyboardClose &&
                (null === document.activeElement || !x.el.contains(document.activeElement)) &&
                x.el.focus();
          });
          return function (M, ee, Re, K, Ze) {
            return z.apply(this, arguments);
          };
        })(),
        re = (function () {
          var z = (0, N.Z)(function* (x) {
            let M = document.activeElement;
            if (!M) return;
            const ee = M?.shadowRoot;
            ee && (M = ee.querySelector(k) || M), yield x.onDidDismiss(), M.focus();
          });
          return function (M) {
            return z.apply(this, arguments);
          };
        })(),
        H = (function () {
          var z = (0, N.Z)(function* (x, M, ee, Re, K, Ze, pt) {
            var ut, mt;
            if (!x.presented) return !1;
            oe(!1), (x.presented = !1);
            try {
              x.el.style.setProperty('pointer-events', 'none'),
                x.willDismiss.emit({ data: M, role: ee }),
                null === (ut = x.willDismissShorthand) || void 0 === ut || ut.emit({ data: M, role: ee });
              const G = (0, ze.b)(x),
                St = x.leaveAnimation ? x.leaveAnimation : ze.c.get(Re, 'ios' === G ? K : Ze);
              ee !== q && (yield Z(x, St, x.el, pt)),
                x.didDismiss.emit({ data: M, role: ee }),
                null === (mt = x.didDismissShorthand) || void 0 === mt || mt.emit({ data: M, role: ee }),
                Ke.delete(x),
                x.el.classList.add('overlay-hidden'),
                x.el.style.removeProperty('pointer-events');
            } catch (G) {
              console.error(G);
            }
            return x.el.remove(), !0;
          });
          return function (M, ee, Re, K, Ze, pt, ut) {
            return z.apply(this, arguments);
          };
        })(),
        R = (z) => z.querySelector('ion-app') || z.body,
        Z = (function () {
          var z = (0, N.Z)(function* (x, M, ee, Re) {
            ee.classList.remove('overlay-hidden');
            const Ze = M(x.el, Re);
            (!x.animated || !ze.c.getBoolean('animated', !0)) && Ze.duration(0),
              x.keyboardClose &&
                Ze.beforeAddWrite(() => {
                  const ut = ee.ownerDocument.activeElement;
                  ut?.matches('input,ion-input, ion-textarea') && ut.blur();
                });
            const pt = Ke.get(x) || [];
            return Ke.set(x, [...pt, Ze]), yield Ze.play(), !0;
          });
          return function (M, ee, Re, K) {
            return z.apply(this, arguments);
          };
        })(),
        Te = (z, x) => {
          let M;
          const ee = new Promise((Re) => (M = Re));
          return (
            xe(z, x, (Re) => {
              M(Re.detail);
            }),
            ee
          );
        },
        xe = (z, x, M) => {
          const ee = (Re) => {
            (0, qe.b)(z, x, ee), M(Re);
          };
          (0, qe.a)(z, x, ee);
        },
        Qe = (z) => 'cancel' === z || z === O,
        $ = (z) => z(),
        T = (z, x) => {
          if ('function' == typeof z)
            return ze.c.get(
              '_zoneGate',
              $,
            )(() => {
              try {
                return z(x);
              } catch (ee) {
                throw ee;
              }
            });
        },
        O = 'backdrop',
        q = 'gesture';
    },
    5414: (qt, st, ae) => {
      'use strict';
      function N(e) {
        return 'function' == typeof e;
      }
      function ze(e) {
        const t = e((r) => {
          Error.call(r), (r.stack = new Error().stack);
        });
        return (t.prototype = Object.create(Error.prototype)), (t.prototype.constructor = t), t;
      }
      const je = ze(
        (e) =>
          function (t) {
            e(this),
              (this.message = t
                ? `${t.length} errors occurred during unsubscription:\n${t
                    .map((r, o) => `${o + 1}) ${r.toString()}`)
                    .join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = t);
          },
      );
      function qe(e, n) {
        if (e) {
          const t = e.indexOf(n);
          0 <= t && e.splice(t, 1);
        }
      }
      class ke {
        constructor(n) {
          (this.initialTeardown = n), (this.closed = !1), (this._parentage = null), (this._finalizers = null);
        }
        unsubscribe() {
          let n;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: t } = this;
            if (t)
              if (((this._parentage = null), Array.isArray(t))) for (const i of t) i.remove(this);
              else t.remove(this);
            const { initialTeardown: r } = this;
            if (N(r))
              try {
                r();
              } catch (i) {
                n = i instanceof je ? i.errors : [i];
              }
            const { _finalizers: o } = this;
            if (o) {
              this._finalizers = null;
              for (const i of o)
                try {
                  Ie(i);
                } catch (s) {
                  (n = n ?? []), s instanceof je ? (n = [...n, ...s.errors]) : n.push(s);
                }
            }
            if (n) throw new je(n);
          }
        }
        add(n) {
          var t;
          if (n && n !== this)
            if (this.closed) Ie(n);
            else {
              if (n instanceof ke) {
                if (n.closed || n._hasParent(this)) return;
                n._addParent(this);
              }
              (this._finalizers = null !== (t = this._finalizers) && void 0 !== t ? t : []).push(n);
            }
        }
        _hasParent(n) {
          const { _parentage: t } = this;
          return t === n || (Array.isArray(t) && t.includes(n));
        }
        _addParent(n) {
          const { _parentage: t } = this;
          this._parentage = Array.isArray(t) ? (t.push(n), t) : t ? [t, n] : n;
        }
        _removeParent(n) {
          const { _parentage: t } = this;
          t === n ? (this._parentage = null) : Array.isArray(t) && qe(t, n);
        }
        remove(n) {
          const { _finalizers: t } = this;
          t && qe(t, n), n instanceof ke && n._removeParent(this);
        }
      }
      ke.EMPTY = (() => {
        const e = new ke();
        return (e.closed = !0), e;
      })();
      const Ke = ke.EMPTY;
      function W(e) {
        return e instanceof ke || (e && 'closed' in e && N(e.remove) && N(e.add) && N(e.unsubscribe));
      }
      function Ie(e) {
        N(e) ? e() : e.unsubscribe();
      }
      const Ce = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        We = {
          setTimeout(e, n, ...t) {
            const { delegate: r } = We;
            return r?.setTimeout ? r.setTimeout(e, n, ...t) : setTimeout(e, n, ...t);
          },
          clearTimeout(e) {
            const { delegate: n } = We;
            return (n?.clearTimeout || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function Ue(e) {
        We.setTimeout(() => {
          const { onUnhandledError: n } = Ce;
          if (!n) throw e;
          n(e);
        });
      }
      function Ee() {}
      const L = pe('C', void 0, void 0);
      function pe(e, n, t) {
        return { kind: e, value: n, error: t };
      }
      let k = null;
      function E(e) {
        if (Ce.useDeprecatedSynchronousErrorHandling) {
          const n = !k;
          if ((n && (k = { errorThrown: !1, error: null }), e(), n)) {
            const { errorThrown: t, error: r } = k;
            if (((k = null), t)) throw r;
          }
        } else e();
      }
      class ge extends ke {
        constructor(n) {
          super(), (this.isStopped = !1), n ? ((this.destination = n), W(n) && n.add(this)) : (this.destination = re);
        }
        static create(n, t, r) {
          return new S(n, t, r);
        }
        next(n) {
          this.isStopped
            ? ue(
                (function le(e) {
                  return pe('N', e, void 0);
                })(n),
                this,
              )
            : this._next(n);
        }
        error(n) {
          this.isStopped
            ? ue(
                (function te(e) {
                  return pe('E', void 0, e);
                })(n),
                this,
              )
            : ((this.isStopped = !0), this._error(n));
        }
        complete() {
          this.isStopped ? ue(L, this) : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
        }
        _next(n) {
          this.destination.next(n);
        }
        _error(n) {
          try {
            this.destination.error(n);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const be = Function.prototype.bind;
      function _e(e, n) {
        return be.call(e, n);
      }
      class Me {
        constructor(n) {
          this.partialObserver = n;
        }
        next(n) {
          const { partialObserver: t } = this;
          if (t.next)
            try {
              t.next(n);
            } catch (r) {
              j(r);
            }
        }
        error(n) {
          const { partialObserver: t } = this;
          if (t.error)
            try {
              t.error(n);
            } catch (r) {
              j(r);
            }
          else j(n);
        }
        complete() {
          const { partialObserver: n } = this;
          if (n.complete)
            try {
              n.complete();
            } catch (t) {
              j(t);
            }
        }
      }
      class S extends ge {
        constructor(n, t, r) {
          let o;
          if ((super(), N(n) || !n)) o = { next: n ?? void 0, error: t ?? void 0, complete: r ?? void 0 };
          else {
            let i;
            this && Ce.useDeprecatedNextContext
              ? ((i = Object.create(n)),
                (i.unsubscribe = () => this.unsubscribe()),
                (o = {
                  next: n.next && _e(n.next, i),
                  error: n.error && _e(n.error, i),
                  complete: n.complete && _e(n.complete, i),
                }))
              : (o = n);
          }
          this.destination = new Me(o);
        }
      }
      function j(e) {
        Ce.useDeprecatedSynchronousErrorHandling
          ? (function ne(e) {
              Ce.useDeprecatedSynchronousErrorHandling && k && ((k.errorThrown = !0), (k.error = e));
            })(e)
          : Ue(e);
      }
      function ue(e, n) {
        const { onStoppedNotification: t } = Ce;
        t && We.setTimeout(() => t(e, n));
      }
      const re = {
          closed: !0,
          next: Ee,
          error: function oe(e) {
            throw e;
          },
          complete: Ee,
        },
        H = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function R(e) {
        return e;
      }
      function Te(e) {
        return 0 === e.length
          ? R
          : 1 === e.length
          ? e[0]
          : function (t) {
              return e.reduce((r, o) => o(r), t);
            };
      }
      let xe = (() => {
        class e {
          constructor(t) {
            t && (this._subscribe = t);
          }
          lift(t) {
            const r = new e();
            return (r.source = this), (r.operator = t), r;
          }
          subscribe(t, r, o) {
            const i = (function T(e) {
              return (
                (e && e instanceof ge) ||
                ((function $(e) {
                  return e && N(e.next) && N(e.error) && N(e.complete);
                })(e) &&
                  W(e))
              );
            })(t)
              ? t
              : new S(t, r, o);
            return (
              E(() => {
                const { operator: s, source: a } = this;
                i.add(s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i));
              }),
              i
            );
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (r) {
              t.error(r);
            }
          }
          forEach(t, r) {
            return new (r = Qe(r))((o, i) => {
              const s = new S({
                next: (a) => {
                  try {
                    t(a);
                  } catch (l) {
                    i(l), s.unsubscribe();
                  }
                },
                error: i,
                complete: o,
              });
              this.subscribe(s);
            });
          }
          _subscribe(t) {
            var r;
            return null === (r = this.source) || void 0 === r ? void 0 : r.subscribe(t);
          }
          [H]() {
            return this;
          }
          pipe(...t) {
            return Te(t)(this);
          }
          toPromise(t) {
            return new (t = Qe(t))((r, o) => {
              let i;
              this.subscribe(
                (s) => (i = s),
                (s) => o(s),
                () => r(i),
              );
            });
          }
        }
        return (e.create = (n) => new e(n)), e;
      })();
      function Qe(e) {
        var n;
        return null !== (n = e ?? Ce.Promise) && void 0 !== n ? n : Promise;
      }
      const O = ze(
        (e) =>
          function () {
            e(this), (this.name = 'ObjectUnsubscribedError'), (this.message = 'object unsubscribed');
          },
      );
      let q = (() => {
        class e extends xe {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(t) {
            const r = new z(this, this);
            return (r.operator = t), r;
          }
          _throwIfClosed() {
            if (this.closed) throw new O();
          }
          next(t) {
            E(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers || (this.currentObservers = Array.from(this.observers));
                for (const r of this.currentObservers) r.next(t);
              }
            });
          }
          error(t) {
            E(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = t);
                const { observers: r } = this;
                for (; r.length; ) r.shift().error(t);
              }
            });
          }
          complete() {
            E(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: t } = this;
                for (; t.length; ) t.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0), (this.observers = this.currentObservers = null);
          }
          get observed() {
            var t;
            return (null === (t = this.observers) || void 0 === t ? void 0 : t.length) > 0;
          }
          _trySubscribe(t) {
            return this._throwIfClosed(), super._trySubscribe(t);
          }
          _subscribe(t) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
          }
          _innerSubscribe(t) {
            const { hasError: r, isStopped: o, observers: i } = this;
            return r || o
              ? Ke
              : ((this.currentObservers = null),
                i.push(t),
                new ke(() => {
                  (this.currentObservers = null), qe(i, t);
                }));
          }
          _checkFinalizedStatuses(t) {
            const { hasError: r, thrownError: o, isStopped: i } = this;
            r ? t.error(o) : i && t.complete();
          }
          asObservable() {
            const t = new xe();
            return (t.source = this), t;
          }
        }
        return (e.create = (n, t) => new z(n, t)), e;
      })();
      class z extends q {
        constructor(n, t) {
          super(), (this.destination = n), (this.source = t);
        }
        next(n) {
          var t, r;
          null === (r = null === (t = this.destination) || void 0 === t ? void 0 : t.next) ||
            void 0 === r ||
            r.call(t, n);
        }
        error(n) {
          var t, r;
          null === (r = null === (t = this.destination) || void 0 === t ? void 0 : t.error) ||
            void 0 === r ||
            r.call(t, n);
        }
        complete() {
          var n, t;
          null === (t = null === (n = this.destination) || void 0 === n ? void 0 : n.complete) ||
            void 0 === t ||
            t.call(n);
        }
        _subscribe(n) {
          var t, r;
          return null !== (r = null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(n)) && void 0 !== r
            ? r
            : Ke;
        }
      }
      function x(e) {
        return N(e?.lift);
      }
      function M(e) {
        return (n) => {
          if (x(n))
            return n.lift(function (t) {
              try {
                return e(t, this);
              } catch (r) {
                this.error(r);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
      function ee(e, n, t, r, o) {
        return new Re(e, n, t, r, o);
      }
      class Re extends ge {
        constructor(n, t, r, o, i, s) {
          super(n),
            (this.onFinalize = i),
            (this.shouldUnsubscribe = s),
            (this._next = t
              ? function (a) {
                  try {
                    t(a);
                  } catch (l) {
                    n.error(l);
                  }
                }
              : super._next),
            (this._error = o
              ? function (a) {
                  try {
                    o(a);
                  } catch (l) {
                    n.error(l);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = r
              ? function () {
                  try {
                    r();
                  } catch (a) {
                    n.error(a);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var n;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: t } = this;
            super.unsubscribe(), !t && (null === (n = this.onFinalize) || void 0 === n || n.call(this));
          }
        }
      }
      function K(e, n) {
        return M((t, r) => {
          let o = 0;
          t.subscribe(
            ee(r, (i) => {
              r.next(e.call(n, i, o++));
            }),
          );
        });
      }
      function Gn(e) {
        return this instanceof Gn ? ((this.v = e), this) : new Gn(e);
      }
      function ws(e, n, t) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var o,
          r = t.apply(e, n || []),
          i = [];
        return (
          (o = {}),
          s('next'),
          s('throw'),
          s('return'),
          (o[Symbol.asyncIterator] = function () {
            return this;
          }),
          o
        );
        function s(g) {
          r[g] &&
            (o[g] = function (y) {
              return new Promise(function (w, F) {
                i.push([g, y, w, F]) > 1 || a(g, y);
              });
            });
        }
        function a(g, y) {
          try {
            !(function l(g) {
              g.value instanceof Gn ? Promise.resolve(g.value.v).then(c, u) : d(i[0][2], g);
            })(r[g](y));
          } catch (w) {
            d(i[0][3], w);
          }
        }
        function c(g) {
          a('next', g);
        }
        function u(g) {
          a('throw', g);
        }
        function d(g, y) {
          g(y), i.shift(), i.length && a(i[0][0], i[0][1]);
        }
      }
      function Po(e) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = (function nn(e) {
              var n = 'function' == typeof Symbol && Symbol.iterator,
                t = n && e[n],
                r = 0;
              if (t) return t.call(e);
              if (e && 'number' == typeof e.length)
                return {
                  next: function () {
                    return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
                  },
                };
              throw new TypeError(n ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
            })(e)),
            (t = {}),
            r('next'),
            r('throw'),
            r('return'),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(i) {
          t[i] =
            e[i] &&
            function (s) {
              return new Promise(function (a, l) {
                !(function o(i, s, a, l) {
                  Promise.resolve(l).then(function (c) {
                    i({ value: c, done: a });
                  }, s);
                })(a, l, (s = e[i](s)).done, s.value);
              });
            };
        }
      }
      const ko = (e) => e && 'number' == typeof e.length && 'function' != typeof e;
      function No(e) {
        return N(e?.then);
      }
      function gi(e) {
        return N(e[H]);
      }
      function Lo(e) {
        return Symbol.asyncIterator && N(e?.[Symbol.asyncIterator]);
      }
      function $o(e) {
        return new TypeError(
          `You provided ${
            null !== e && 'object' == typeof e ? 'an invalid object' : `'${e}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
        );
      }
      const mi = (function fo() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      })();
      function vi(e) {
        return N(e?.[mi]);
      }
      function yi(e) {
        return ws(this, arguments, function* () {
          const t = e.getReader();
          try {
            for (;;) {
              const { value: r, done: o } = yield Gn(t.read());
              if (o) return yield Gn(void 0);
              yield yield Gn(r);
            }
          } finally {
            t.releaseLock();
          }
        });
      }
      function Dr(e) {
        return N(e?.getReader);
      }
      function $t(e) {
        if (e instanceof xe) return e;
        if (null != e) {
          if (gi(e))
            return (function Cr(e) {
              return new xe((n) => {
                const t = e[H]();
                if (N(t.subscribe)) return t.subscribe(n);
                throw new TypeError('Provided object does not correctly implement Symbol.observable');
              });
            })(e);
          if (ko(e))
            return (function Rt(e) {
              return new xe((n) => {
                for (let t = 0; t < e.length && !n.closed; t++) n.next(e[t]);
                n.complete();
              });
            })(e);
          if (No(e))
            return (function On(e) {
              return new xe((n) => {
                e.then(
                  (t) => {
                    n.closed || (n.next(t), n.complete());
                  },
                  (t) => n.error(t),
                ).then(null, Ue);
              });
            })(e);
          if (Lo(e)) return _i(e);
          if (vi(e))
            return (function sr(e) {
              return new xe((n) => {
                for (const t of e) if ((n.next(t), n.closed)) return;
                n.complete();
              });
            })(e);
          if (Dr(e))
            return (function Vo(e) {
              return _i(yi(e));
            })(e);
        }
        throw $o(e);
      }
      function _i(e) {
        return new xe((n) => {
          (function Bo(e, n) {
            var t, r, o, i;
            return (function In(e, n, t, r) {
              return new (t || (t = Promise))(function (i, s) {
                function a(u) {
                  try {
                    c(r.next(u));
                  } catch (d) {
                    s(d);
                  }
                }
                function l(u) {
                  try {
                    c(r.throw(u));
                  } catch (d) {
                    s(d);
                  }
                }
                function c(u) {
                  u.done
                    ? i(u.value)
                    : (function o(i) {
                        return i instanceof t
                          ? i
                          : new t(function (s) {
                              s(i);
                            });
                      })(u.value).then(a, l);
                }
                c((r = r.apply(e, n || [])).next());
              });
            })(this, void 0, void 0, function* () {
              try {
                for (t = Po(e); !(r = yield t.next()).done; ) if ((n.next(r.value), n.closed)) return;
              } catch (s) {
                o = { error: s };
              } finally {
                try {
                  r && !r.done && (i = t.return) && (yield i.call(t));
                } finally {
                  if (o) throw o.error;
                }
              }
              n.complete();
            });
          })(e, n).catch((t) => n.error(t));
        });
      }
      function Pn(e, n, t, r = 0, o = !1) {
        const i = n.schedule(function () {
          t(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
        }, r);
        if ((e.add(i), !o)) return i;
      }
      function Ot(e, n, t = 1 / 0) {
        return N(n)
          ? Ot((r, o) => K((i, s) => n(r, i, o, s))($t(e(r, o))), t)
          : ('number' == typeof n && (t = n),
            M((r, o) =>
              (function Ms(e, n, t, r, o, i, s, a) {
                const l = [];
                let c = 0,
                  u = 0,
                  d = !1;
                const g = () => {
                    d && !l.length && !c && n.complete();
                  },
                  y = (F) => (c < r ? w(F) : l.push(F)),
                  w = (F) => {
                    i && n.next(F), c++;
                    let V = !1;
                    $t(t(F, u++)).subscribe(
                      ee(
                        n,
                        (ie) => {
                          o?.(ie), i ? y(ie) : n.next(ie);
                        },
                        () => {
                          V = !0;
                        },
                        void 0,
                        () => {
                          if (V)
                            try {
                              for (c--; l.length && c < r; ) {
                                const ie = l.shift();
                                s ? Pn(n, s, () => w(ie)) : w(ie);
                              }
                              g();
                            } catch (ie) {
                              n.error(ie);
                            }
                        },
                      ),
                    );
                  };
                return (
                  e.subscribe(
                    ee(n, y, () => {
                      (d = !0), g();
                    }),
                  ),
                  () => {
                    a?.();
                  }
                );
              })(r, o, e, t),
            ));
      }
      function ar(e = 1 / 0) {
        return Ot(R, e);
      }
      const kn = new xe((e) => e.complete());
      function jo(e) {
        return e[e.length - 1];
      }
      function Vr(e) {
        return (function xs(e) {
          return e && N(e.schedule);
        })(jo(e))
          ? e.pop()
          : void 0;
      }
      function pn(e, n = 0) {
        return M((t, r) => {
          t.subscribe(
            ee(
              r,
              (o) => Pn(r, e, () => r.next(o), n),
              () => Pn(r, e, () => r.complete(), n),
              (o) => Pn(r, e, () => r.error(o), n),
            ),
          );
        });
      }
      function Ci(e, n = 0) {
        return M((t, r) => {
          r.add(e.schedule(() => t.subscribe(r), n));
        });
      }
      function en(e, n) {
        if (!e) throw new Error('Iterable cannot be null');
        return new xe((t) => {
          Pn(t, n, () => {
            const r = e[Symbol.asyncIterator]();
            Pn(
              t,
              n,
              () => {
                r.next().then((o) => {
                  o.done ? t.complete() : t.next(o.value);
                });
              },
              0,
              !0,
            );
          });
        });
      }
      function bt(e, n) {
        return n
          ? (function wi(e, n) {
              if (null != e) {
                if (gi(e))
                  return (function bi(e, n) {
                    return $t(e).pipe(Ci(n), pn(n));
                  })(e, n);
                if (ko(e))
                  return (function qn(e, n) {
                    return new xe((t) => {
                      let r = 0;
                      return n.schedule(function () {
                        r === e.length ? t.complete() : (t.next(e[r++]), t.closed || this.schedule());
                      });
                    });
                  })(e, n);
                if (No(e))
                  return (function br(e, n) {
                    return $t(e).pipe(Ci(n), pn(n));
                  })(e, n);
                if (Lo(e)) return en(e, n);
                if (vi(e))
                  return (function Ho(e, n) {
                    return new xe((t) => {
                      let r;
                      return (
                        Pn(t, n, () => {
                          (r = e[mi]()),
                            Pn(
                              t,
                              n,
                              () => {
                                let o, i;
                                try {
                                  ({ value: o, done: i } = r.next());
                                } catch (s) {
                                  return void t.error(s);
                                }
                                i ? t.complete() : t.next(o);
                              },
                              0,
                              !0,
                            );
                        }),
                        () => N(r?.return) && r.return()
                      );
                    });
                  })(e, n);
                if (Dr(e))
                  return (function ho(e, n) {
                    return en(yi(e), n);
                  })(e, n);
              }
              throw $o(e);
            })(e, n)
          : $t(e);
      }
      function po(e, n, ...t) {
        if (!0 === n) return void e();
        if (!1 === n) return;
        const r = new S({
          next: () => {
            r.unsubscribe(), e();
          },
        });
        return n(...t).subscribe(r);
      }
      function at(e) {
        for (let n in e) if (e[n] === at) return n;
        throw Error('Could not find renamed property on target object.');
      }
      function dt(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(dt).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const n = e.toString();
        if (null == n) return '' + n;
        const t = n.indexOf('\n');
        return -1 === t ? n : n.substring(0, t);
      }
      function go(e, n) {
        return null == e || '' === e ? (null === n ? '' : n) : null == n || '' === n ? e : e + ' ' + n;
      }
      const Fs = at({ __forward_ref__: at });
      function f(e) {
        return (
          (e.__forward_ref__ = f),
          (e.toString = function () {
            return dt(this());
          }),
          e
        );
      }
      function p(e) {
        return (function D(e) {
          return 'function' == typeof e && e.hasOwnProperty(Fs) && e.__forward_ref__ === f;
        })(e)
          ? e()
          : e;
      }
      class _ extends Error {
        constructor(n, t) {
          super(
            (function m(e, n) {
              return `NG0${Math.abs(e)}${n ? ': ' + n.trim() : ''}`;
            })(n, t),
          ),
            (this.code = n);
        }
      }
      function v(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function Ae(e, n) {
        throw new _(-201, !1);
      }
      function Nn(e, n) {
        null == e &&
          (function gt(e, n, t, r) {
            throw new Error(`ASSERTION ERROR: ${e}` + (null == r ? '' : ` [Expected=> ${t} ${r} ${n} <=Actual]`));
          })(n, e, null, '!=');
      }
      function Ge(e) {
        return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 };
      }
      function Er(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function el(e) {
        return Cp(e, tl) || Cp(e, wp);
      }
      function Cp(e, n) {
        return e.hasOwnProperty(n) ? e[n] : null;
      }
      function bp(e) {
        return e && (e.hasOwnProperty(ru) || e.hasOwnProperty(Gw)) ? e[ru] : null;
      }
      const tl = at({ ɵprov: at }),
        ru = at({ ɵinj: at }),
        wp = at({ ngInjectableDef: at }),
        Gw = at({ ngInjectorDef: at });
      var Be = (() => (
        ((Be = Be || {})[(Be.Default = 0)] = 'Default'),
        (Be[(Be.Host = 1)] = 'Host'),
        (Be[(Be.Self = 2)] = 'Self'),
        (Be[(Be.SkipSelf = 4)] = 'SkipSelf'),
        (Be[(Be.Optional = 8)] = 'Optional'),
        Be
      ))();
      let ou;
      function Zn(e) {
        const n = ou;
        return (ou = e), n;
      }
      function Ep(e, n, t) {
        const r = el(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : t & Be.Optional
          ? null
          : void 0 !== n
          ? n
          : void Ae(dt(e));
      }
      function mo(e) {
        return { toString: e }.toString();
      }
      var lr = (() => (((lr = lr || {})[(lr.OnPush = 0)] = 'OnPush'), (lr[(lr.Default = 1)] = 'Default'), lr))(),
        Ir = (() => {
          return (
            ((e = Ir || (Ir = {}))[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            Ir
          );
          var e;
        })();
      const wt = (() =>
          (typeof globalThis < 'u' && globalThis) ||
          (typeof global < 'u' && global) ||
          (typeof window < 'u' && window) ||
          (typeof self < 'u' && typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && self))(),
        Ii = {},
        ft = [],
        nl = at({ ɵcmp: at }),
        iu = at({ ɵdir: at }),
        su = at({ ɵpipe: at }),
        Ip = at({ ɵmod: at }),
        Br = at({ ɵfac: at }),
        Ps = at({ __NG_ELEMENT_ID__: at });
      let qw = 0;
      function se(e) {
        return mo(() => {
          const t = !0 === e.standalone,
            r = {},
            o = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: r,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === lr.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              standalone: t,
              dependencies: (t && e.dependencies) || null,
              getStandaloneInjector: null,
              selectors: e.selectors || ft,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || Ir.Emulated,
              id: 'c' + qw++,
              styles: e.styles || ft,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            i = e.dependencies,
            s = e.features;
          return (
            (o.inputs = Ap(e.inputs, r)),
            (o.outputs = Ap(e.outputs)),
            s && s.forEach((a) => a(o)),
            (o.directiveDefs = i ? () => ('function' == typeof i ? i() : i).map(Sp).filter(Mp) : null),
            (o.pipeDefs = i ? () => ('function' == typeof i ? i() : i).map(mn).filter(Mp) : null),
            o
          );
        });
      }
      function Sp(e) {
        return vt(e) || gn(e);
      }
      function Mp(e) {
        return null !== e;
      }
      function jr(e) {
        return mo(() => ({
          type: e.type,
          bootstrap: e.bootstrap || ft,
          declarations: e.declarations || ft,
          imports: e.imports || ft,
          exports: e.exports || ft,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function Ap(e, n) {
        if (null == e) return Ii;
        const t = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let o = e[r],
              i = o;
            Array.isArray(o) && ((i = o[1]), (o = o[0])), (t[o] = r), n && (n[o] = i);
          }
        return t;
      }
      const Fe = se;
      function vt(e) {
        return e[nl] || null;
      }
      function gn(e) {
        return e[iu] || null;
      }
      function mn(e) {
        return e[su] || null;
      }
      function Ln(e, n) {
        const t = e[Ip] || null;
        if (!t && !0 === n) throw new Error(`Type ${dt(e)} does not have '\u0275mod' property.`);
        return t;
      }
      function An(e) {
        return Array.isArray(e) && 'object' == typeof e[1];
      }
      function ur(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function cu(e) {
        return 0 != (8 & e.flags);
      }
      function sl(e) {
        return 2 == (2 & e.flags);
      }
      function al(e) {
        return 1 == (1 & e.flags);
      }
      function dr(e) {
        return null !== e.template;
      }
      function Jw(e) {
        return 0 != (256 & e[2]);
      }
      function Ko(e, n) {
        return e.hasOwnProperty(Br) ? e[Br] : null;
      }
      class n0 {
        constructor(n, t, r) {
          (this.previousValue = n), (this.currentValue = t), (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Fp(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = o0), r0;
      }
      function r0() {
        const e = Op(this),
          n = e?.current;
        if (n) {
          const t = e.previous;
          if (t === Ii) e.previous = n;
          else for (let r in n) t[r] = n[r];
          (e.current = null), this.ngOnChanges(n);
        }
      }
      function o0(e, n, t, r) {
        const o =
            Op(e) ||
            (function s0(e, n) {
              return (e[Rp] = n);
            })(e, { previous: Ii, current: null }),
          i = o.current || (o.current = {}),
          s = o.previous,
          a = this.declaredInputs[t],
          l = s[a];
        (i[a] = new n0(l && l.currentValue, n, s === Ii)), (e[r] = n);
      }
      const Rp = '__ngSimpleChanges__';
      function Op(e) {
        return e[Rp] || null;
      }
      function Ut(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function ll(e, n) {
        return Ut(n[e]);
      }
      function Vn(e, n) {
        return Ut(n[e.index]);
      }
      function pu(e, n) {
        return e.data[n];
      }
      function Bn(e, n) {
        const t = n[e];
        return An(t) ? t : t[0];
      }
      function cl(e) {
        return 64 == (64 & e[2]);
      }
      function vo(e, n) {
        return null == n ? null : e[n];
      }
      function Pp(e) {
        e[18] = 0;
      }
      function gu(e, n) {
        e[5] += n;
        let t = e,
          r = e[3];
        for (; null !== r && ((1 === n && 1 === t[5]) || (-1 === n && 0 === t[5])); ) (r[5] += n), (t = r), (r = r[3]);
      }
      const Ye = { lFrame: zp(null), bindingsEnabled: !0 };
      function Np() {
        return Ye.bindingsEnabled;
      }
      function Y() {
        return Ye.lFrame.lView;
      }
      function lt() {
        return Ye.lFrame.tView;
      }
      function Kt() {
        let e = Lp();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function Lp() {
        return Ye.lFrame.currentTNode;
      }
      function Sr(e, n) {
        const t = Ye.lFrame;
        (t.currentTNode = e), (t.isParent = n);
      }
      function mu() {
        return Ye.lFrame.isParent;
      }
      function vu() {
        Ye.lFrame.isParent = !1;
      }
      function Fi() {
        return Ye.lFrame.bindingIndex++;
      }
      function w0(e, n) {
        const t = Ye.lFrame;
        (t.bindingIndex = t.bindingRootIndex = e), yu(n);
      }
      function yu(e) {
        Ye.lFrame.currentDirectiveIndex = e;
      }
      function Du(e) {
        Ye.lFrame.currentQueryIndex = e;
      }
      function I0(e) {
        const n = e[1];
        return 2 === n.type ? n.declTNode : 1 === n.type ? e[6] : null;
      }
      function Hp(e, n, t) {
        if (t & Be.SkipSelf) {
          let o = n,
            i = e;
          for (
            ;
            !((o = o.parent), null !== o || t & Be.Host || ((o = I0(i)), null === o || ((i = i[15]), 10 & o.type)));

          );
          if (null === o) return !1;
          (n = o), (e = i);
        }
        const r = (Ye.lFrame = Up());
        return (r.currentTNode = n), (r.lView = e), !0;
      }
      function Cu(e) {
        const n = Up(),
          t = e[1];
        (Ye.lFrame = n),
          (n.currentTNode = t.firstChild),
          (n.lView = e),
          (n.tView = t),
          (n.contextLView = e),
          (n.bindingIndex = t.bindingStartIndex),
          (n.inI18n = !1);
      }
      function Up() {
        const e = Ye.lFrame,
          n = null === e ? null : e.child;
        return null === n ? zp(e) : n;
      }
      function zp(e) {
        const n = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = n), n;
      }
      function Gp() {
        const e = Ye.lFrame;
        return (Ye.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
      }
      const Wp = Gp;
      function bu() {
        const e = Gp();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function _n() {
        return Ye.lFrame.selectedIndex;
      }
      function yo(e) {
        Ye.lFrame.selectedIndex = e;
      }
      function ul(e, n) {
        for (let t = n.directiveStart, r = n.directiveEnd; t < r; t++) {
          const i = e.data[t].type.prototype,
            {
              ngAfterContentInit: s,
              ngAfterContentChecked: a,
              ngAfterViewInit: l,
              ngAfterViewChecked: c,
              ngOnDestroy: u,
            } = i;
          s && (e.contentHooks || (e.contentHooks = [])).push(-t, s),
            a &&
              ((e.contentHooks || (e.contentHooks = [])).push(t, a),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(t, a)),
            l && (e.viewHooks || (e.viewHooks = [])).push(-t, l),
            c &&
              ((e.viewHooks || (e.viewHooks = [])).push(t, c),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(t, c)),
            null != u && (e.destroyHooks || (e.destroyHooks = [])).push(t, u);
        }
      }
      function dl(e, n, t) {
        qp(e, n, 3, t);
      }
      function fl(e, n, t, r) {
        (3 & e[2]) === t && qp(e, n, t, r);
      }
      function wu(e, n) {
        let t = e[2];
        (3 & t) === n && ((t &= 2047), (t += 1), (e[2] = t));
      }
      function qp(e, n, t, r) {
        const i = r ?? -1,
          s = n.length - 1;
        let a = 0;
        for (let l = void 0 !== r ? 65535 & e[18] : 0; l < s; l++)
          if ('number' == typeof n[l + 1]) {
            if (((a = n[l]), null != r && a >= r)) break;
          } else
            n[l] < 0 && (e[18] += 65536),
              (a < i || -1 == i) && (P0(e, t, n, l), (e[18] = (4294901760 & e[18]) + l + 2)),
              l++;
      }
      function P0(e, n, t, r) {
        const o = t[r] < 0,
          i = t[r + 1],
          a = e[o ? -t[r] : t[r]];
        if (o) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === n) {
            e[2] += 2048;
            try {
              i.call(a);
            } finally {
            }
          }
        } else
          try {
            i.call(a);
          } finally {
          }
      }
      class Bs {
        constructor(n, t, r) {
          (this.factory = n), (this.resolving = !1), (this.canSeeViewProviders = t), (this.injectImpl = r);
        }
      }
      function hl(e, n, t) {
        let r = 0;
        for (; r < t.length; ) {
          const o = t[r];
          if ('number' == typeof o) {
            if (0 !== o) break;
            r++;
            const i = t[r++],
              s = t[r++],
              a = t[r++];
            e.setAttribute(n, s, a, i);
          } else {
            const i = o,
              s = t[++r];
            Yp(i) ? e.setProperty(n, i, s) : e.setAttribute(n, i, s), r++;
          }
        }
        return r;
      }
      function Kp(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Yp(e) {
        return 64 === e.charCodeAt(0);
      }
      function pl(e, n) {
        if (null !== n && 0 !== n.length)
          if (null === e || 0 === e.length) e = n.slice();
          else {
            let t = -1;
            for (let r = 0; r < n.length; r++) {
              const o = n[r];
              'number' == typeof o ? (t = o) : 0 === t || Zp(e, t, o, null, -1 === t || 2 === t ? n[++r] : null);
            }
          }
        return e;
      }
      function Zp(e, n, t, r, o) {
        let i = 0,
          s = e.length;
        if (-1 === n) s = -1;
        else
          for (; i < e.length; ) {
            const a = e[i++];
            if ('number' == typeof a) {
              if (a === n) {
                s = -1;
                break;
              }
              if (a > n) {
                s = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const a = e[i];
          if ('number' == typeof a) break;
          if (a === t) {
            if (null === r) return void (null !== o && (e[i + 1] = o));
            if (r === e[i + 1]) return void (e[i + 2] = o);
          }
          i++, null !== r && i++, null !== o && i++;
        }
        -1 !== s && (e.splice(s, 0, n), (i = s + 1)),
          e.splice(i++, 0, t),
          null !== r && e.splice(i++, 0, r),
          null !== o && e.splice(i++, 0, o);
      }
      function Xp(e) {
        return -1 !== e;
      }
      function Ri(e) {
        return 32767 & e;
      }
      function Oi(e, n) {
        let t = (function V0(e) {
            return e >> 16;
          })(e),
          r = n;
        for (; t > 0; ) (r = r[15]), t--;
        return r;
      }
      let Iu = !0;
      function gl(e) {
        const n = Iu;
        return (Iu = e), n;
      }
      let B0 = 0;
      const Mr = {};
      function Hs(e, n) {
        const t = Mu(e, n);
        if (-1 !== t) return t;
        const r = n[1];
        r.firstCreatePass && ((e.injectorIndex = n.length), Su(r.data, e), Su(n, null), Su(r.blueprint, null));
        const o = ml(e, n),
          i = e.injectorIndex;
        if (Xp(o)) {
          const s = Ri(o),
            a = Oi(o, n),
            l = a[1].data;
          for (let c = 0; c < 8; c++) n[i + c] = a[s + c] | l[s + c];
        }
        return (n[i + 8] = o), i;
      }
      function Su(e, n) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, n);
      }
      function Mu(e, n) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === n[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function ml(e, n) {
        if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
        let t = 0,
          r = null,
          o = n;
        for (; null !== o; ) {
          if (((r = sg(o)), null === r)) return -1;
          if ((t++, (o = o[15]), -1 !== r.injectorIndex)) return r.injectorIndex | (t << 16);
        }
        return -1;
      }
      function vl(e, n, t) {
        !(function j0(e, n, t) {
          let r;
          'string' == typeof t ? (r = t.charCodeAt(0) || 0) : t.hasOwnProperty(Ps) && (r = t[Ps]),
            null == r && (r = t[Ps] = B0++);
          const o = 255 & r;
          n.data[e + (o >> 5)] |= 1 << o;
        })(e, n, t);
      }
      function eg(e, n, t) {
        if (t & Be.Optional || void 0 !== e) return e;
        Ae();
      }
      function tg(e, n, t, r) {
        if ((t & Be.Optional && void 0 === r && (r = null), 0 == (t & (Be.Self | Be.Host)))) {
          const o = e[9],
            i = Zn(void 0);
          try {
            return o ? o.get(n, r, t & Be.Optional) : Ep(n, r, t & Be.Optional);
          } finally {
            Zn(i);
          }
        }
        return eg(r, 0, t);
      }
      function ng(e, n, t, r = Be.Default, o) {
        if (null !== e) {
          if (1024 & n[2]) {
            const s = (function W0(e, n, t, r, o) {
              let i = e,
                s = n;
              for (; null !== i && null !== s && 1024 & s[2] && !(256 & s[2]); ) {
                const a = rg(i, s, t, r | Be.Self, Mr);
                if (a !== Mr) return a;
                let l = i.parent;
                if (!l) {
                  const c = s[21];
                  if (c) {
                    const u = c.get(t, Mr, r);
                    if (u !== Mr) return u;
                  }
                  (l = sg(s)), (s = s[15]);
                }
                i = l;
              }
              return o;
            })(e, n, t, r, Mr);
            if (s !== Mr) return s;
          }
          const i = rg(e, n, t, r, Mr);
          if (i !== Mr) return i;
        }
        return tg(n, t, r, o);
      }
      function rg(e, n, t, r, o) {
        const i = (function z0(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const n = e.hasOwnProperty(Ps) ? e[Ps] : void 0;
          return 'number' == typeof n ? (n >= 0 ? 255 & n : G0) : n;
        })(t);
        if ('function' == typeof i) {
          if (!Hp(n, e, r)) return r & Be.Host ? eg(o, 0, r) : tg(n, t, r, o);
          try {
            const s = i(r);
            if (null != s || r & Be.Optional) return s;
            Ae();
          } finally {
            Wp();
          }
        } else if ('number' == typeof i) {
          let s = null,
            a = Mu(e, n),
            l = -1,
            c = r & Be.Host ? n[16][6] : null;
          for (
            (-1 === a || r & Be.SkipSelf) &&
            ((l = -1 === a ? ml(e, n) : n[a + 8]),
            -1 !== l && ig(r, !1) ? ((s = n[1]), (a = Ri(l)), (n = Oi(l, n))) : (a = -1));
            -1 !== a;

          ) {
            const u = n[1];
            if (og(i, a, u.data)) {
              const d = U0(a, n, t, s, r, c);
              if (d !== Mr) return d;
            }
            (l = n[a + 8]),
              -1 !== l && ig(r, n[1].data[a + 8] === c) && og(i, a, n)
                ? ((s = u), (a = Ri(l)), (n = Oi(l, n)))
                : (a = -1);
          }
        }
        return o;
      }
      function U0(e, n, t, r, o, i) {
        const s = n[1],
          a = s.data[e + 8],
          u = (function yl(e, n, t, r, o) {
            const i = e.providerIndexes,
              s = n.data,
              a = 1048575 & i,
              l = e.directiveStart,
              u = i >> 20,
              g = o ? a + u : e.directiveEnd;
            for (let y = r ? a : a + u; y < g; y++) {
              const w = s[y];
              if ((y < l && t === w) || (y >= l && w.type === t)) return y;
            }
            if (o) {
              const y = s[l];
              if (y && dr(y) && y.type === t) return l;
            }
            return null;
          })(a, s, t, null == r ? sl(a) && Iu : r != s && 0 != (3 & a.type), o & Be.Host && i === a);
        return null !== u ? Us(n, s, u, a) : Mr;
      }
      function Us(e, n, t, r) {
        let o = e[t];
        const i = n.data;
        if (
          (function k0(e) {
            return e instanceof Bs;
          })(o)
        ) {
          const s = o;
          s.resolving &&
            (function P(e, n) {
              const t = n ? `. Dependency path: ${n.join(' > ')} > ${e}` : '';
              throw new _(-200, `Circular dependency in DI detected for ${e}${t}`);
            })(
              (function C(e) {
                return 'function' == typeof e
                  ? e.name || e.toString()
                  : 'object' == typeof e && null != e && 'function' == typeof e.type
                  ? e.type.name || e.type.toString()
                  : v(e);
              })(i[t]),
            );
          const a = gl(s.canSeeViewProviders);
          s.resolving = !0;
          const l = s.injectImpl ? Zn(s.injectImpl) : null;
          Hp(e, r, Be.Default);
          try {
            (o = e[t] = s.factory(void 0, i, e, r)),
              n.firstCreatePass &&
                t >= r.directiveStart &&
                (function O0(e, n, t) {
                  const { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = n.type.prototype;
                  if (r) {
                    const s = Fp(n);
                    (t.preOrderHooks || (t.preOrderHooks = [])).push(e, s),
                      (t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(e, s);
                  }
                  o && (t.preOrderHooks || (t.preOrderHooks = [])).push(0 - e, o),
                    i &&
                      ((t.preOrderHooks || (t.preOrderHooks = [])).push(e, i),
                      (t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(e, i));
                })(t, i[t], n);
          } finally {
            null !== l && Zn(l), gl(a), (s.resolving = !1), Wp();
          }
        }
        return o;
      }
      function og(e, n, t) {
        return !!(t[n + (e >> 5)] & (1 << e));
      }
      function ig(e, n) {
        return !(e & Be.Self || (e & Be.Host && n));
      }
      class Pi {
        constructor(n, t) {
          (this._tNode = n), (this._lView = t);
        }
        get(n, t, r) {
          return ng(this._tNode, this._lView, n, r, t);
        }
      }
      function G0() {
        return new Pi(Kt(), Y());
      }
      function sg(e) {
        const n = e[1],
          t = n.type;
        return 2 === t ? n.declTNode : 1 === t ? e[6] : null;
      }
      const Ni = '__parameters__';
      function $i(e, n, t) {
        return mo(() => {
          const r = (function Tu(e) {
            return function (...t) {
              if (e) {
                const r = e(...t);
                for (const o in r) this[o] = r[o];
              }
            };
          })(n);
          function o(...i) {
            if (this instanceof o) return r.apply(this, i), this;
            const s = new o(...i);
            return (a.annotation = s), a;
            function a(l, c, u) {
              const d = l.hasOwnProperty(Ni) ? l[Ni] : Object.defineProperty(l, Ni, { value: [] })[Ni];
              for (; d.length <= u; ) d.push(null);
              return (d[u] = d[u] || []).push(s), l;
            }
          }
          return (
            t && (o.prototype = Object.create(t.prototype)), (o.prototype.ngMetadataName = e), (o.annotationCls = o), o
          );
        });
      }
      class Le {
        constructor(n, t) {
          (this._desc = n),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t &&
                (this.ɵprov = Ge({ token: this, providedIn: t.providedIn || 'root', factory: t.factory }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function zr(e, n) {
        e.forEach((t) => (Array.isArray(t) ? zr(t, n) : n(t)));
      }
      function lg(e, n, t) {
        n >= e.length ? e.push(t) : e.splice(n, 0, t);
      }
      function _l(e, n) {
        return n >= e.length - 1 ? e.pop() : e.splice(n, 1)[0];
      }
      function Ws(e, n) {
        const t = [];
        for (let r = 0; r < e; r++) t.push(n);
        return t;
      }
      function Hn(e, n, t) {
        let r = Vi(e, n);
        return (
          r >= 0
            ? (e[1 | r] = t)
            : ((r = ~r),
              (function Z0(e, n, t, r) {
                let o = e.length;
                if (o == n) e.push(t, r);
                else if (1 === o) e.push(r, e[0]), (e[0] = t);
                else {
                  for (o--, e.push(e[o - 1], e[o]); o > n; ) (e[o] = e[o - 2]), o--;
                  (e[n] = t), (e[n + 1] = r);
                }
              })(e, r, n, t)),
          r
        );
      }
      function Fu(e, n) {
        const t = Vi(e, n);
        if (t >= 0) return e[1 | t];
      }
      function Vi(e, n) {
        return (function dg(e, n, t) {
          let r = 0,
            o = e.length >> t;
          for (; o !== r; ) {
            const i = r + ((o - r) >> 1),
              s = e[i << t];
            if (n === s) return i << t;
            s > n ? (o = i) : (r = i + 1);
          }
          return ~(o << t);
        })(e, n, 1);
      }
      const qs = {},
        Ou = '__NG_DI_FLAG__',
        Cl = 'ngTempTokenPath',
        oE = /\n/gm,
        fg = '__source';
      let Ks;
      function Bi(e) {
        const n = Ks;
        return (Ks = e), n;
      }
      function sE(e, n = Be.Default) {
        if (void 0 === Ks) throw new _(-203, !1);
        return null === Ks ? Ep(e, void 0, n) : Ks.get(e, n & Be.Optional ? null : void 0, n);
      }
      function Se(e, n = Be.Default) {
        return (
          (function Ww() {
            return ou;
          })() || sE
        )(p(e), n);
      }
      function Vt(e, n = Be.Default) {
        return (
          'number' != typeof n && (n = 0 | (n.optional && 8) | (n.host && 1) | (n.self && 2) | (n.skipSelf && 4)),
          Se(e, n)
        );
      }
      function Pu(e) {
        const n = [];
        for (let t = 0; t < e.length; t++) {
          const r = p(e[t]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new _(900, !1);
            let o,
              i = Be.Default;
            for (let s = 0; s < r.length; s++) {
              const a = r[s],
                l = aE(a);
              'number' == typeof l ? (-1 === l ? (o = a.token) : (i |= l)) : (o = a);
            }
            n.push(Se(o, i));
          } else n.push(Se(r));
        }
        return n;
      }
      function Ys(e, n) {
        return (e[Ou] = n), (e.prototype[Ou] = n), e;
      }
      function aE(e) {
        return e[Ou];
      }
      const Zs = Ys($i('Optional'), 8),
        Xs = Ys($i('SkipSelf'), 4);
      var Tn = (() => (
        ((Tn = Tn || {})[(Tn.Important = 1)] = 'Important'), (Tn[(Tn.DashCase = 2)] = 'DashCase'), Tn
      ))();
      const Vu = new Map();
      let IE = 0;
      const ju = '__ngContext__';
      function an(e, n) {
        An(n)
          ? ((e[ju] = n[20]),
            (function ME(e) {
              Vu.set(e[20], e);
            })(n))
          : (e[ju] = n);
      }
      function Uu(e, n) {
        return undefined(e, n);
      }
      function ta(e) {
        const n = e[3];
        return ur(n) ? n[3] : n;
      }
      function zu(e) {
        return Og(e[13]);
      }
      function Gu(e) {
        return Og(e[4]);
      }
      function Og(e) {
        for (; null !== e && !ur(e); ) e = e[4];
        return e;
      }
      function Hi(e, n, t, r, o) {
        if (null != r) {
          let i,
            s = !1;
          ur(r) ? (i = r) : An(r) && ((s = !0), (r = r[0]));
          const a = Ut(r);
          0 === e && null !== t
            ? null == o
              ? Vg(n, t, a)
              : Zo(n, t, a, o || null, !0)
            : 1 === e && null !== t
            ? Zo(n, t, a, o || null, !0)
            : 2 === e
            ? (function Qu(e, n, t) {
                const r = El(e, n);
                r &&
                  (function YE(e, n, t, r) {
                    e.removeChild(n, t, r);
                  })(e, r, n, t);
              })(n, a, s)
            : 3 === e && n.destroyNode(a),
            null != i &&
              (function QE(e, n, t, r, o) {
                const i = t[7];
                i !== Ut(t) && Hi(n, e, r, i, o);
                for (let a = 10; a < t.length; a++) {
                  const l = t[a];
                  na(l[1], l, e, n, r, i);
                }
              })(n, e, i, t, o);
        }
      }
      function qu(e, n, t) {
        return e.createElement(n, t);
      }
      function kg(e, n) {
        const t = e[9],
          r = t.indexOf(n),
          o = n[3];
        512 & n[2] && ((n[2] &= -513), gu(o, -1)), t.splice(r, 1);
      }
      function Ku(e, n) {
        if (e.length <= 10) return;
        const t = 10 + n,
          r = e[t];
        if (r) {
          const o = r[17];
          null !== o && o !== e && kg(o, r), n > 0 && (e[t - 1][4] = r[4]);
          const i = _l(e, 10 + n);
          !(function jE(e, n) {
            na(e, n, n[11], 2, null, null), (n[0] = null), (n[6] = null);
          })(r[1], r);
          const s = i[19];
          null !== s && s.detachView(i[1]), (r[3] = null), (r[4] = null), (r[2] &= -65);
        }
        return r;
      }
      function Ng(e, n) {
        if (!(128 & n[2])) {
          const t = n[11];
          t.destroyNode && na(e, n, t, 3, null, null),
            (function zE(e) {
              let n = e[13];
              if (!n) return Yu(e[1], e);
              for (; n; ) {
                let t = null;
                if (An(n)) t = n[13];
                else {
                  const r = n[10];
                  r && (t = r);
                }
                if (!t) {
                  for (; n && !n[4] && n !== e; ) An(n) && Yu(n[1], n), (n = n[3]);
                  null === n && (n = e), An(n) && Yu(n[1], n), (t = n && n[4]);
                }
                n = t;
              }
            })(n);
        }
      }
      function Yu(e, n) {
        if (!(128 & n[2])) {
          (n[2] &= -65),
            (n[2] |= 128),
            (function KE(e, n) {
              let t;
              if (null != e && null != (t = e.destroyHooks))
                for (let r = 0; r < t.length; r += 2) {
                  const o = n[t[r]];
                  if (!(o instanceof Bs)) {
                    const i = t[r + 1];
                    if (Array.isArray(i))
                      for (let s = 0; s < i.length; s += 2) {
                        const a = o[i[s]],
                          l = i[s + 1];
                        try {
                          l.call(a);
                        } finally {
                        }
                      }
                    else
                      try {
                        i.call(o);
                      } finally {
                      }
                  }
                }
            })(e, n),
            (function qE(e, n) {
              const t = e.cleanup,
                r = n[7];
              let o = -1;
              if (null !== t)
                for (let i = 0; i < t.length - 1; i += 2)
                  if ('string' == typeof t[i]) {
                    const s = t[i + 1],
                      a = 'function' == typeof s ? s(n) : Ut(n[s]),
                      l = r[(o = t[i + 2])],
                      c = t[i + 3];
                    'boolean' == typeof c
                      ? a.removeEventListener(t[i], l, c)
                      : c >= 0
                      ? r[(o = c)]()
                      : r[(o = -c)].unsubscribe(),
                      (i += 2);
                  } else {
                    const s = r[(o = t[i + 1])];
                    t[i].call(s);
                  }
              if (null !== r) {
                for (let i = o + 1; i < r.length; i++) (0, r[i])();
                n[7] = null;
              }
            })(e, n),
            1 === n[1].type && n[11].destroy();
          const t = n[17];
          if (null !== t && ur(n[3])) {
            t !== n[3] && kg(t, n);
            const r = n[19];
            null !== r && r.detachView(e);
          }
          !(function AE(e) {
            Vu.delete(e[20]);
          })(n);
        }
      }
      function Lg(e, n, t) {
        return (function $g(e, n, t) {
          let r = n;
          for (; null !== r && 40 & r.type; ) r = (n = r).parent;
          if (null === r) return t[0];
          if (2 & r.flags) {
            const o = e.data[r.directiveStart].encapsulation;
            if (o === Ir.None || o === Ir.Emulated) return null;
          }
          return Vn(r, t);
        })(e, n.parent, t);
      }
      function Zo(e, n, t, r, o) {
        e.insertBefore(n, t, r, o);
      }
      function Vg(e, n, t) {
        e.appendChild(n, t);
      }
      function Bg(e, n, t, r, o) {
        null !== r ? Zo(e, n, t, r, o) : Vg(e, n, t);
      }
      function El(e, n) {
        return e.parentNode(n);
      }
      function jg(e, n, t) {
        return Ug(e, n, t);
      }
      let nd,
        Ug = function Hg(e, n, t) {
          return 40 & e.type ? Vn(e, t) : null;
        };
      function Il(e, n, t, r) {
        const o = Lg(e, r, n),
          i = n[11],
          a = jg(r.parent || n[6], r, n);
        if (null != o)
          if (Array.isArray(t)) for (let l = 0; l < t.length; l++) Bg(i, o, t[l], a, !1);
          else Bg(i, o, t, a, !1);
      }
      function Sl(e, n) {
        if (null !== n) {
          const t = n.type;
          if (3 & t) return Vn(n, e);
          if (4 & t) return Xu(-1, e[n.index]);
          if (8 & t) {
            const r = n.child;
            if (null !== r) return Sl(e, r);
            {
              const o = e[n.index];
              return ur(o) ? Xu(-1, o) : Ut(o);
            }
          }
          if (32 & t) return Uu(n, e)() || Ut(e[n.index]);
          {
            const r = Gg(e, n);
            return null !== r ? (Array.isArray(r) ? r[0] : Sl(ta(e[16]), r)) : Sl(e, n.next);
          }
        }
        return null;
      }
      function Gg(e, n) {
        return null !== n ? e[16][6].projection[n.projection] : null;
      }
      function Xu(e, n) {
        const t = 10 + e + 1;
        if (t < n.length) {
          const r = n[t],
            o = r[1].firstChild;
          if (null !== o) return Sl(r, o);
        }
        return n[7];
      }
      function Ju(e, n, t, r, o, i, s) {
        for (; null != t; ) {
          const a = r[t.index],
            l = t.type;
          if ((s && 0 === n && (a && an(Ut(a), r), (t.flags |= 4)), 64 != (64 & t.flags)))
            if (8 & l) Ju(e, n, t.child, r, o, i, !1), Hi(n, e, o, a, i);
            else if (32 & l) {
              const c = Uu(t, r);
              let u;
              for (; (u = c()); ) Hi(n, e, o, u, i);
              Hi(n, e, o, a, i);
            } else 16 & l ? Wg(e, n, r, t, o, i) : Hi(n, e, o, a, i);
          t = s ? t.projectionNext : t.next;
        }
      }
      function na(e, n, t, r, o, i) {
        Ju(t, r, e.firstChild, n, o, i, !1);
      }
      function Wg(e, n, t, r, o, i) {
        const s = t[16],
          l = s[6].projection[r.projection];
        if (Array.isArray(l)) for (let c = 0; c < l.length; c++) Hi(n, e, o, l[c], i);
        else Ju(e, n, l, s[3], o, i, !0);
      }
      function qg(e, n, t) {
        e.setAttribute(n, 'style', t);
      }
      function ed(e, n, t) {
        '' === t ? e.removeAttribute(n, 'class') : e.setAttribute(n, 'class', t);
      }
      const cd = new Le('ENVIRONMENT_INITIALIZER'),
        sm = new Le('INJECTOR', -1),
        am = new Le('INJECTOR_DEF_TYPES');
      class lm {
        get(n, t = qs) {
          if (t === qs) {
            const r = new Error(`NullInjectorError: No provider for ${dt(n)}!`);
            throw ((r.name = 'NullInjectorError'), r);
          }
          return t;
        }
      }
      function MI(...e) {
        return { ɵproviders: cm(0, e) };
      }
      function cm(e, ...n) {
        const t = [],
          r = new Set();
        let o;
        return (
          zr(n, (i) => {
            const s = i;
            ud(s, t, [], r) && (o || (o = []), o.push(s));
          }),
          void 0 !== o && um(o, t),
          t
        );
      }
      function um(e, n) {
        for (let t = 0; t < e.length; t++) {
          const { providers: o } = e[t];
          zr(o, (i) => {
            n.push(i);
          });
        }
      }
      function ud(e, n, t, r) {
        if (!(e = p(e))) return !1;
        let o = null,
          i = bp(e);
        const s = !i && vt(e);
        if (i || s) {
          if (s && !s.standalone) return !1;
          o = e;
        } else {
          const l = e.ngModule;
          if (((i = bp(l)), !i)) return !1;
          o = l;
        }
        const a = r.has(o);
        if (s) {
          if (a) return !1;
          if ((r.add(o), s.dependencies)) {
            const l = 'function' == typeof s.dependencies ? s.dependencies() : s.dependencies;
            for (const c of l) ud(c, n, t, r);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !a) {
              let c;
              r.add(o);
              try {
                zr(i.imports, (u) => {
                  ud(u, n, t, r) && (c || (c = []), c.push(u));
                });
              } finally {
              }
              void 0 !== c && um(c, n);
            }
            if (!a) {
              const c = Ko(o) || (() => new o());
              n.push(
                { provide: o, useFactory: c, deps: ft },
                { provide: am, useValue: o, multi: !0 },
                { provide: cd, useValue: () => Se(o), multi: !0 },
              );
            }
            const l = i.providers;
            null == l ||
              a ||
              zr(l, (u) => {
                n.push(u);
              });
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      const AI = at({ provide: String, useValue: at });
      function dd(e) {
        return null !== e && 'object' == typeof e && AI in e;
      }
      function Qo(e) {
        return 'function' == typeof e;
      }
      const fd = new Le('Set Injector scope.'),
        xl = {},
        xI = {};
      let hd;
      function Fl() {
        return void 0 === hd && (hd = new lm()), hd;
      }
      class Co {}
      class hm extends Co {
        constructor(n, t, r, o) {
          super(),
            (this.parent = t),
            (this.source = r),
            (this.scopes = o),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            gd(n, (s) => this.processProvider(s)),
            this.records.set(sm, Ui(void 0, this)),
            o.has('environment') && this.records.set(Co, Ui(void 0, this));
          const i = this.records.get(fd);
          null != i && 'string' == typeof i.value && this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(this.get(am.multi, ft, Be.Self)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const n of this._ngOnDestroyHooks) n.ngOnDestroy();
            for (const n of this._onDestroyHooks) n();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              (this._onDestroyHooks.length = 0);
          }
        }
        onDestroy(n) {
          this._onDestroyHooks.push(n);
        }
        runInContext(n) {
          this.assertNotDestroyed();
          const t = Bi(this),
            r = Zn(void 0);
          try {
            return n();
          } finally {
            Bi(t), Zn(r);
          }
        }
        get(n, t = qs, r = Be.Default) {
          this.assertNotDestroyed();
          const o = Bi(this),
            i = Zn(void 0);
          try {
            if (!(r & Be.SkipSelf)) {
              let a = this.records.get(n);
              if (void 0 === a) {
                const l =
                  (function kI(e) {
                    return 'function' == typeof e || ('object' == typeof e && e instanceof Le);
                  })(n) && el(n);
                (a = l && this.injectableDefInScope(l) ? Ui(pd(n), xl) : null), this.records.set(n, a);
              }
              if (null != a) return this.hydrate(n, a);
            }
            return (r & Be.Self ? Fl() : this.parent).get(n, (t = r & Be.Optional && t === qs ? null : t));
          } catch (s) {
            if ('NullInjectorError' === s.name) {
              if (((s[Cl] = s[Cl] || []).unshift(dt(n)), o)) throw s;
              return (function lE(e, n, t, r) {
                const o = e[Cl];
                throw (
                  (n[fg] && o.unshift(n[fg]),
                  (e.message = (function cE(e, n, t, r = null) {
                    e = e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1) ? e.slice(2) : e;
                    let o = dt(n);
                    if (Array.isArray(n)) o = n.map(dt).join(' -> ');
                    else if ('object' == typeof n) {
                      let i = [];
                      for (let s in n)
                        if (n.hasOwnProperty(s)) {
                          let a = n[s];
                          i.push(s + ':' + ('string' == typeof a ? JSON.stringify(a) : dt(a)));
                        }
                      o = `{${i.join(', ')}}`;
                    }
                    return `${t}${r ? '(' + r + ')' : ''}[${o}]: ${e.replace(oE, '\n  ')}`;
                  })('\n' + e.message, o, t, r)),
                  (e.ngTokenPath = o),
                  (e[Cl] = null),
                  e)
                );
              })(s, n, 'R3InjectorError', this.source);
            }
            throw s;
          } finally {
            Zn(i), Bi(o);
          }
        }
        resolveInjectorInitializers() {
          const n = Bi(this),
            t = Zn(void 0);
          try {
            const r = this.get(cd.multi, ft, Be.Self);
            for (const o of r) o();
          } finally {
            Bi(n), Zn(t);
          }
        }
        toString() {
          const n = [],
            t = this.records;
          for (const r of t.keys()) n.push(dt(r));
          return `R3Injector[${n.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new _(205, !1);
        }
        processProvider(n) {
          let t = Qo((n = p(n))) ? n : p(n && n.provide);
          const r = (function RI(e) {
            return dd(e)
              ? Ui(void 0, e.useValue)
              : Ui(
                  (function pm(e, n, t) {
                    let r;
                    if (Qo(e)) {
                      const o = p(e);
                      return Ko(o) || pd(o);
                    }
                    if (dd(e)) r = () => p(e.useValue);
                    else if (
                      (function fm(e) {
                        return !(!e || !e.useFactory);
                      })(e)
                    )
                      r = () => e.useFactory(...Pu(e.deps || []));
                    else if (
                      (function dm(e) {
                        return !(!e || !e.useExisting);
                      })(e)
                    )
                      r = () => Se(p(e.useExisting));
                    else {
                      const o = p(e && (e.useClass || e.provide));
                      if (
                        !(function OI(e) {
                          return !!e.deps;
                        })(e)
                      )
                        return Ko(o) || pd(o);
                      r = () => new o(...Pu(e.deps));
                    }
                    return r;
                  })(e),
                  xl,
                );
          })(n);
          if (Qo(n) || !0 !== n.multi) this.records.get(t);
          else {
            let o = this.records.get(t);
            o || ((o = Ui(void 0, xl, !0)), (o.factory = () => Pu(o.multi)), this.records.set(t, o)),
              (t = n),
              o.multi.push(n);
          }
          this.records.set(t, r);
        }
        hydrate(n, t) {
          return (
            t.value === xl && ((t.value = xI), (t.value = t.factory())),
            'object' == typeof t.value &&
              t.value &&
              (function PI(e) {
                return null !== e && 'object' == typeof e && 'function' == typeof e.ngOnDestroy;
              })(t.value) &&
              this._ngOnDestroyHooks.add(t.value),
            t.value
          );
        }
        injectableDefInScope(n) {
          if (!n.providedIn) return !1;
          const t = p(n.providedIn);
          return 'string' == typeof t ? 'any' === t || this.scopes.has(t) : this.injectorDefTypes.has(t);
        }
      }
      function pd(e) {
        const n = el(e),
          t = null !== n ? n.factory : Ko(e);
        if (null !== t) return t;
        if (e instanceof Le) throw new _(204, !1);
        if (e instanceof Function)
          return (function FI(e) {
            const n = e.length;
            if (n > 0) throw (Ws(n, '?'), new _(204, !1));
            const t = (function Uw(e) {
              const n = e && (e[tl] || e[wp]);
              if (n) {
                const t = (function zw(e) {
                  if (e.hasOwnProperty('name')) return e.name;
                  const n = ('' + e).match(/^function\s*([^\s(]+)/);
                  return null === n ? '' : n[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${t}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${t}" class.`,
                  ),
                  n
                );
              }
              return null;
            })(e);
            return null !== t ? () => t.factory(e) : () => new e();
          })(e);
        throw new _(204, !1);
      }
      function Ui(e, n, t = !1) {
        return { factory: e, value: n, multi: t ? [] : void 0 };
      }
      function NI(e) {
        return !!e.ɵproviders;
      }
      function gd(e, n) {
        for (const t of e) Array.isArray(t) ? gd(t, n) : NI(t) ? gd(t.ɵproviders, n) : n(t);
      }
      class gm {}
      class VI {
        resolveComponentFactory(n) {
          throw (function $I(e) {
            const n = Error(`No component factory found for ${dt(e)}. Did you add it to @NgModule.entryComponents?`);
            return (n.ngComponent = e), n;
          })(n);
        }
      }
      let Wr = (() => {
        class e {}
        return (e.NULL = new VI()), e;
      })();
      function BI() {
        return zi(Kt(), Y());
      }
      function zi(e, n) {
        return new Q(Vn(e, n));
      }
      let Q = (() => {
        class e {
          constructor(t) {
            this.nativeElement = t;
          }
        }
        return (e.__NG_ELEMENT_ID__ = BI), e;
      })();
      class vm {}
      let UI = (() => {
        class e {}
        return (e.ɵprov = Ge({ token: e, providedIn: 'root', factory: () => null })), e;
      })();
      class sa {
        constructor(n) {
          (this.full = n),
            (this.major = n.split('.')[0]),
            (this.minor = n.split('.')[1]),
            (this.patch = n.split('.').slice(2).join('.'));
        }
      }
      const zI = new sa('14.2.12'),
        md = {};
      function yd(e) {
        return e.ngOriginalError;
      }
      class Gi {
        constructor() {
          this._console = console;
        }
        handleError(n) {
          const t = this._findOriginalError(n);
          this._console.error('ERROR', n), t && this._console.error('ORIGINAL ERROR', t);
        }
        _findOriginalError(n) {
          let t = n && yd(n);
          for (; t && yd(t); ) t = yd(t);
          return t || null;
        }
      }
      function Kr(e) {
        return e instanceof Function ? e() : e;
      }
      function _m(e, n, t) {
        let r = e.length;
        for (;;) {
          const o = e.indexOf(n, t);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const i = n.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
          }
          t = o + 1;
        }
      }
      const Dm = 'ng-template';
      function tS(e, n, t) {
        let r = 0;
        for (; r < e.length; ) {
          let o = e[r++];
          if (t && 'class' === o) {
            if (((o = e[r]), -1 !== _m(o.toLowerCase(), n, 0))) return !0;
          } else if (1 === o) {
            for (; r < e.length && 'string' == typeof (o = e[r++]); ) if (o.toLowerCase() === n) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Cm(e) {
        return 4 === e.type && e.value !== Dm;
      }
      function nS(e, n, t) {
        return n === (4 !== e.type || t ? e.value : Dm);
      }
      function rS(e, n, t) {
        let r = 4;
        const o = e.attrs || [],
          i = (function sS(e) {
            for (let n = 0; n < e.length; n++) if (Kp(e[n])) return n;
            return e.length;
          })(o);
        let s = !1;
        for (let a = 0; a < n.length; a++) {
          const l = n[a];
          if ('number' != typeof l) {
            if (!s)
              if (4 & r) {
                if (((r = 2 | (1 & r)), ('' !== l && !nS(e, l, t)) || ('' === l && 1 === n.length))) {
                  if (fr(r)) return !1;
                  s = !0;
                }
              } else {
                const c = 8 & r ? l : n[++a];
                if (8 & r && null !== e.attrs) {
                  if (!tS(e.attrs, c, t)) {
                    if (fr(r)) return !1;
                    s = !0;
                  }
                  continue;
                }
                const d = oS(8 & r ? 'class' : l, o, Cm(e), t);
                if (-1 === d) {
                  if (fr(r)) return !1;
                  s = !0;
                  continue;
                }
                if ('' !== c) {
                  let g;
                  g = d > i ? '' : o[d + 1].toLowerCase();
                  const y = 8 & r ? g : null;
                  if ((y && -1 !== _m(y, c, 0)) || (2 & r && c !== g)) {
                    if (fr(r)) return !1;
                    s = !0;
                  }
                }
              }
          } else {
            if (!s && !fr(r) && !fr(l)) return !1;
            if (s && fr(l)) continue;
            (s = !1), (r = l | (1 & r));
          }
        }
        return fr(r) || s;
      }
      function fr(e) {
        return 0 == (1 & e);
      }
      function oS(e, n, t, r) {
        if (null === n) return -1;
        let o = 0;
        if (r || !t) {
          let i = !1;
          for (; o < n.length; ) {
            const s = n[o];
            if (s === e) return o;
            if (3 === s || 6 === s) i = !0;
            else {
              if (1 === s || 2 === s) {
                let a = n[++o];
                for (; 'string' == typeof a; ) a = n[++o];
                continue;
              }
              if (4 === s) break;
              if (0 === s) {
                o += 4;
                continue;
              }
            }
            o += i ? 1 : 2;
          }
          return -1;
        }
        return (function aS(e, n) {
          let t = e.indexOf(4);
          if (t > -1)
            for (t++; t < e.length; ) {
              const r = e[t];
              if ('number' == typeof r) return -1;
              if (r === n) return t;
              t++;
            }
          return -1;
        })(n, e);
      }
      function bm(e, n, t = !1) {
        for (let r = 0; r < n.length; r++) if (rS(e, n[r], t)) return !0;
        return !1;
      }
      function lS(e, n) {
        e: for (let t = 0; t < n.length; t++) {
          const r = n[t];
          if (e.length === r.length) {
            for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function wm(e, n) {
        return e ? ':not(' + n.trim() + ')' : n;
      }
      function cS(e) {
        let n = e[0],
          t = 1,
          r = 2,
          o = '',
          i = !1;
        for (; t < e.length; ) {
          let s = e[t];
          if ('string' == typeof s)
            if (2 & r) {
              const a = e[++t];
              o += '[' + s + (a.length > 0 ? '="' + a + '"' : '') + ']';
            } else 8 & r ? (o += '.' + s) : 4 & r && (o += ' ' + s);
          else '' !== o && !fr(s) && ((n += wm(i, o)), (o = '')), (r = s), (i = i || !fr(r));
          t++;
        }
        return '' !== o && (n += wm(i, o)), n;
      }
      const Xe = {};
      function bo(e) {
        Em(lt(), Y(), _n() + e, !1);
      }
      function Em(e, n, t, r) {
        if (!r)
          if (3 == (3 & n[2])) {
            const i = e.preOrderCheckHooks;
            null !== i && dl(n, i, t);
          } else {
            const i = e.preOrderHooks;
            null !== i && fl(n, i, 0, t);
          }
        yo(t);
      }
      function Am(e, n = null, t = null, r) {
        const o = Tm(e, n, t, r);
        return o.resolveInjectorInitializers(), o;
      }
      function Tm(e, n = null, t = null, r, o = new Set()) {
        const i = [t || ft, MI(e)];
        return (r = r || ('object' == typeof e ? void 0 : dt(e))), new hm(i, n || Fl(), r || null, o);
      }
      let kt = (() => {
        class e {
          static create(t, r) {
            if (Array.isArray(t)) return Am({ name: '' }, r, t, '');
            {
              const o = t.name ?? '';
              return Am({ name: o }, t.parent, t.providers, o);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = qs),
          (e.NULL = new lm()),
          (e.ɵprov = Ge({ token: e, providedIn: 'any', factory: () => Se(sm) })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function h(e, n = Be.Default) {
        const t = Y();
        return null === t ? Se(e, n) : ng(Kt(), t, p(e), n);
      }
      function wd() {
        throw new Error('invalid');
      }
      function Ol(e, n) {
        return (e << 17) | (n << 2);
      }
      function hr(e) {
        return (e >> 17) & 32767;
      }
      function Ed(e) {
        return 2 | e;
      }
      function Yr(e) {
        return (131068 & e) >> 2;
      }
      function Id(e, n) {
        return (-131069 & e) | (n << 2);
      }
      function Sd(e) {
        return 1 | e;
      }
      function Wm(e, n) {
        const t = e.contentQueries;
        if (null !== t)
          for (let r = 0; r < t.length; r += 2) {
            const o = t[r],
              i = t[r + 1];
            if (-1 !== i) {
              const s = e.data[i];
              Du(o), s.contentQueries(2, n[i], i);
            }
          }
      }
      function Nl(e, n, t, r, o, i, s, a, l, c, u) {
        const d = n.blueprint.slice();
        return (
          (d[0] = o),
          (d[2] = 76 | r),
          (null !== u || (e && 1024 & e[2])) && (d[2] |= 1024),
          Pp(d),
          (d[3] = d[15] = e),
          (d[8] = t),
          (d[10] = s || (e && e[10])),
          (d[11] = a || (e && e[11])),
          (d[12] = l || (e && e[12]) || null),
          (d[9] = c || (e && e[9]) || null),
          (d[6] = i),
          (d[20] = (function SE() {
            return IE++;
          })()),
          (d[21] = u),
          (d[16] = 2 == n.type ? e[16] : d),
          d
        );
      }
      function Ki(e, n, t, r, o) {
        let i = e.data[n];
        if (null === i)
          (i = (function Pd(e, n, t, r, o) {
            const i = Lp(),
              s = mu(),
              l = (e.data[n] = (function GS(e, n, t, r, o, i) {
                return {
                  type: t,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: n ? n.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: o,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: n,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, s ? i : i && i.parent, t, n, r, o));
            return (
              null === e.firstChild && (e.firstChild = l),
              null !== i &&
                (s ? null == i.child && null !== l.parent && (i.child = l) : null === i.next && (i.next = l)),
              l
            );
          })(e, n, t, r, o)),
            (function b0() {
              return Ye.lFrame.inI18n;
            })() && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = t), (i.value = r), (i.attrs = o);
          const s = (function Vs() {
            const e = Ye.lFrame,
              n = e.currentTNode;
            return e.isParent ? n : n.parent;
          })();
          i.injectorIndex = null === s ? -1 : s.injectorIndex;
        }
        return Sr(i, !0), i;
      }
      function Yi(e, n, t, r) {
        if (0 === t) return -1;
        const o = n.length;
        for (let i = 0; i < t; i++) n.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function kd(e, n, t) {
        Cu(n);
        try {
          const r = e.viewQuery;
          null !== r && Ud(1, r, t);
          const o = e.template;
          null !== o && qm(e, n, o, 1, t),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && Wm(e, n),
            e.staticViewQueries && Ud(2, e.viewQuery, t);
          const i = e.components;
          null !== i &&
            (function HS(e, n) {
              for (let t = 0; t < n.length; t++) aM(e, n[t]);
            })(n, i);
        } catch (r) {
          throw (e.firstCreatePass && ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)), r);
        } finally {
          (n[2] &= -5), bu();
        }
      }
      function Ll(e, n, t, r) {
        const o = n[2];
        if (128 != (128 & o)) {
          Cu(n);
          try {
            Pp(n),
              (function Vp(e) {
                return (Ye.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== t && qm(e, n, t, 2, r);
            const s = 3 == (3 & o);
            if (s) {
              const c = e.preOrderCheckHooks;
              null !== c && dl(n, c, null);
            } else {
              const c = e.preOrderHooks;
              null !== c && fl(n, c, 0, null), wu(n, 0);
            }
            if (
              ((function iM(e) {
                for (let n = zu(e); null !== n; n = Gu(n)) {
                  if (!n[2]) continue;
                  const t = n[9];
                  for (let r = 0; r < t.length; r++) {
                    const o = t[r],
                      i = o[3];
                    0 == (512 & o[2]) && gu(i, 1), (o[2] |= 512);
                  }
                }
              })(n),
              (function oM(e) {
                for (let n = zu(e); null !== n; n = Gu(n))
                  for (let t = 10; t < n.length; t++) {
                    const r = n[t],
                      o = r[1];
                    cl(r) && Ll(o, r, o.template, r[8]);
                  }
              })(n),
              null !== e.contentQueries && Wm(e, n),
              s)
            ) {
              const c = e.contentCheckHooks;
              null !== c && dl(n, c);
            } else {
              const c = e.contentHooks;
              null !== c && fl(n, c, 1), wu(n, 1);
            }
            !(function BS(e, n) {
              const t = e.hostBindingOpCodes;
              if (null !== t)
                try {
                  for (let r = 0; r < t.length; r++) {
                    const o = t[r];
                    if (o < 0) yo(~o);
                    else {
                      const i = o,
                        s = t[++r],
                        a = t[++r];
                      w0(s, i), a(2, n[i]);
                    }
                  }
                } finally {
                  yo(-1);
                }
            })(e, n);
            const a = e.components;
            null !== a &&
              (function jS(e, n) {
                for (let t = 0; t < n.length; t++) sM(e, n[t]);
              })(n, a);
            const l = e.viewQuery;
            if ((null !== l && Ud(2, l, r), s)) {
              const c = e.viewCheckHooks;
              null !== c && dl(n, c);
            } else {
              const c = e.viewHooks;
              null !== c && fl(n, c, 2), wu(n, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (n[2] &= -41),
              512 & n[2] && ((n[2] &= -513), gu(n[3], -1));
          } finally {
            bu();
          }
        }
      }
      function qm(e, n, t, r, o) {
        const i = _n(),
          s = 2 & r;
        try {
          yo(-1), s && n.length > 22 && Em(e, n, 22, !1), t(r, o);
        } finally {
          yo(i);
        }
      }
      function Nd(e, n, t) {
        !Np() ||
          ((function ZS(e, n, t, r) {
            const o = t.directiveStart,
              i = t.directiveEnd;
            e.firstCreatePass || Hs(t, n), an(r, n);
            const s = t.initialInputs;
            for (let a = o; a < i; a++) {
              const l = e.data[a],
                c = dr(l);
              c && tM(n, t, l);
              const u = Us(n, e, a, t);
              an(u, n), null !== s && nM(0, a - o, u, l, 0, s), c && (Bn(t.index, n)[8] = u);
            }
          })(e, n, t, Vn(t, n)),
          128 == (128 & t.flags) &&
            (function XS(e, n, t) {
              const r = t.directiveStart,
                o = t.directiveEnd,
                i = t.index,
                s = (function E0() {
                  return Ye.lFrame.currentDirectiveIndex;
                })();
              try {
                yo(i);
                for (let a = r; a < o; a++) {
                  const l = e.data[a],
                    c = n[a];
                  yu(a), (null !== l.hostBindings || 0 !== l.hostVars || null !== l.hostAttrs) && tv(l, c);
                }
              } finally {
                yo(-1), yu(s);
              }
            })(e, n, t));
      }
      function Ld(e, n, t = Vn) {
        const r = n.localNames;
        if (null !== r) {
          let o = n.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const s = r[i + 1],
              a = -1 === s ? t(n, e) : e[s];
            e[o++] = a;
          }
        }
      }
      function Ym(e) {
        const n = e.tView;
        return null === n || n.incompleteFirstPass
          ? (e.tView = $d(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts,
            ))
          : n;
      }
      function $d(e, n, t, r, o, i, s, a, l, c) {
        const u = 22 + r,
          d = u + o,
          g = (function US(e, n) {
            const t = [];
            for (let r = 0; r < n; r++) t.push(r < e ? null : Xe);
            return t;
          })(u, d),
          y = 'function' == typeof c ? c() : c;
        return (g[1] = {
          type: e,
          blueprint: g,
          template: t,
          queries: null,
          viewQuery: a,
          declTNode: n,
          data: g.slice().fill(null, u),
          bindingStartIndex: u,
          expandoStartIndex: d,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof i ? i() : i,
          pipeRegistry: 'function' == typeof s ? s() : s,
          firstChild: null,
          schemas: l,
          consts: y,
          incompleteFirstPass: !1,
        });
      }
      function Xm(e, n, t) {
        for (let r in e)
          if (e.hasOwnProperty(r)) {
            const o = e[r];
            (t = null === t ? {} : t).hasOwnProperty(r) ? t[r].push(n, o) : (t[r] = [n, o]);
          }
        return t;
      }
      function Qm(e, n) {
        const r = n.directiveEnd,
          o = e.data,
          i = n.attrs,
          s = [];
        let a = null,
          l = null;
        for (let c = n.directiveStart; c < r; c++) {
          const u = o[c],
            d = u.inputs,
            g = null === i || Cm(n) ? null : rM(d, i);
          s.push(g), (a = Xm(d, c, a)), (l = Xm(u.outputs, c, l));
        }
        null !== a && (a.hasOwnProperty('class') && (n.flags |= 16), a.hasOwnProperty('style') && (n.flags |= 32)),
          (n.initialInputs = s),
          (n.inputs = a),
          (n.outputs = l);
      }
      function Jm(e, n) {
        const t = Bn(n, e);
        16 & t[2] || (t[2] |= 32);
      }
      function Vd(e, n, t, r) {
        let o = !1;
        if (Np()) {
          const i = (function QS(e, n, t) {
              const r = e.directiveRegistry;
              let o = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const s = r[i];
                  bm(t, s.selectors, !1) &&
                    (o || (o = []), vl(Hs(t, n), e, s.type), dr(s) ? (nv(e, t), o.unshift(s)) : o.push(s));
                }
              return o;
            })(e, n, t),
            s = null === r ? null : { '': -1 };
          if (null !== i) {
            (o = !0), rv(t, e.data.length, i.length);
            for (let u = 0; u < i.length; u++) {
              const d = i[u];
              d.providersResolver && d.providersResolver(d);
            }
            let a = !1,
              l = !1,
              c = Yi(e, n, i.length, null);
            for (let u = 0; u < i.length; u++) {
              const d = i[u];
              (t.mergedAttrs = pl(t.mergedAttrs, d.hostAttrs)),
                ov(e, t, n, c, d),
                eM(c, d, s),
                null !== d.contentQueries && (t.flags |= 8),
                (null !== d.hostBindings || null !== d.hostAttrs || 0 !== d.hostVars) && (t.flags |= 128);
              const g = d.type.prototype;
              !a &&
                (g.ngOnChanges || g.ngOnInit || g.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(t.index), (a = !0)),
                !l &&
                  (g.ngOnChanges || g.ngDoCheck) &&
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(t.index), (l = !0)),
                c++;
            }
            Qm(e, t);
          }
          s &&
            (function JS(e, n, t) {
              if (n) {
                const r = (e.localNames = []);
                for (let o = 0; o < n.length; o += 2) {
                  const i = t[n[o + 1]];
                  if (null == i) throw new _(-301, !1);
                  r.push(n[o], i);
                }
              }
            })(t, r, s);
        }
        return (t.mergedAttrs = pl(t.mergedAttrs, t.attrs)), o;
      }
      function ev(e, n, t, r, o, i) {
        const s = i.hostBindings;
        if (s) {
          let a = e.hostBindingOpCodes;
          null === a && (a = e.hostBindingOpCodes = []);
          const l = ~n.index;
          (function YS(e) {
            let n = e.length;
            for (; n > 0; ) {
              const t = e[--n];
              if ('number' == typeof t && t < 0) return t;
            }
            return 0;
          })(a) != l && a.push(l),
            a.push(r, o, s);
        }
      }
      function tv(e, n) {
        null !== e.hostBindings && e.hostBindings(1, n);
      }
      function nv(e, n) {
        (n.flags |= 2), (e.components || (e.components = [])).push(n.index);
      }
      function eM(e, n, t) {
        if (t) {
          if (n.exportAs) for (let r = 0; r < n.exportAs.length; r++) t[n.exportAs[r]] = e;
          dr(n) && (t[''] = e);
        }
      }
      function rv(e, n, t) {
        (e.flags |= 1), (e.directiveStart = n), (e.directiveEnd = n + t), (e.providerIndexes = n);
      }
      function ov(e, n, t, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = Ko(o.type)),
          s = new Bs(i, dr(o), h);
        (e.blueprint[r] = s), (t[r] = s), ev(e, n, 0, r, Yi(e, t, o.hostVars, Xe), o);
      }
      function tM(e, n, t) {
        const r = Vn(n, e),
          o = Ym(t),
          i = e[10],
          s = $l(e, Nl(e, o, null, t.onPush ? 32 : 16, r, n, i, i.createRenderer(r, t), null, null, null));
        e[n.index] = s;
      }
      function nM(e, n, t, r, o, i) {
        const s = i[n];
        if (null !== s) {
          const a = r.setInput;
          for (let l = 0; l < s.length; ) {
            const c = s[l++],
              u = s[l++],
              d = s[l++];
            null !== a ? r.setInput(t, d, c, u) : (t[u] = d);
          }
        }
      }
      function rM(e, n) {
        let t = null,
          r = 0;
        for (; r < n.length; ) {
          const o = n[r];
          if (0 !== o)
            if (5 !== o) {
              if ('number' == typeof o) break;
              e.hasOwnProperty(o) && (null === t && (t = []), t.push(o, e[o], n[r + 1])), (r += 2);
            } else r += 2;
          else r += 4;
        }
        return t;
      }
      function iv(e, n, t, r) {
        return new Array(e, !0, !1, n, null, 0, r, t, null, null);
      }
      function sM(e, n) {
        const t = Bn(n, e);
        if (cl(t)) {
          const r = t[1];
          48 & t[2] ? Ll(r, t, r.template, t[8]) : t[5] > 0 && jd(t);
        }
      }
      function jd(e) {
        for (let r = zu(e); null !== r; r = Gu(r))
          for (let o = 10; o < r.length; o++) {
            const i = r[o];
            if (cl(i))
              if (512 & i[2]) {
                const s = i[1];
                Ll(s, i, s.template, i[8]);
              } else i[5] > 0 && jd(i);
          }
        const t = e[1].components;
        if (null !== t)
          for (let r = 0; r < t.length; r++) {
            const o = Bn(t[r], e);
            cl(o) && o[5] > 0 && jd(o);
          }
      }
      function aM(e, n) {
        const t = Bn(n, e),
          r = t[1];
        (function lM(e, n) {
          for (let t = n.length; t < e.blueprint.length; t++) n.push(e.blueprint[t]);
        })(r, t),
          kd(r, t, t[8]);
      }
      function $l(e, n) {
        return e[13] ? (e[14][4] = n) : (e[13] = n), (e[14] = n), n;
      }
      function Vl(e, n, t, r = !0) {
        const o = n[10];
        o.begin && o.begin();
        try {
          Ll(e, n, e.template, t);
        } catch (s) {
          throw (
            (r &&
              (function cv(e, n) {
                const t = e[9],
                  r = t ? t.get(Gi, null) : null;
                r && r.handleError(n);
              })(n, s),
            s)
          );
        } finally {
          o.end && o.end();
        }
      }
      function Ud(e, n, t) {
        Du(0), n(e, t);
      }
      function zd(e, n, t, r, o) {
        for (let i = 0; i < t.length; ) {
          const s = t[i++],
            a = t[i++],
            l = n[s],
            c = e.data[s];
          null !== c.setInput ? c.setInput(l, o, r, a) : (l[a] = o);
        }
      }
      function Bl(e, n, t) {
        let r = t ? e.styles : null,
          o = t ? e.classes : null,
          i = 0;
        if (null !== n)
          for (let s = 0; s < n.length; s++) {
            const a = n[s];
            'number' == typeof a ? (i = a) : 1 == i ? (o = go(o, a)) : 2 == i && (r = go(r, a + ': ' + n[++s] + ';'));
          }
        t ? (e.styles = r) : (e.stylesWithoutHost = r), t ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      function jl(e, n, t, r, o = !1) {
        for (; null !== t; ) {
          const i = n[t.index];
          if ((null !== i && r.push(Ut(i)), ur(i)))
            for (let a = 10; a < i.length; a++) {
              const l = i[a],
                c = l[1].firstChild;
              null !== c && jl(l[1], l, c, r);
            }
          const s = t.type;
          if (8 & s) jl(e, n, t.child, r);
          else if (32 & s) {
            const a = Uu(t, n);
            let l;
            for (; (l = a()); ) r.push(l);
          } else if (16 & s) {
            const a = Gg(n, t);
            if (Array.isArray(a)) r.push(...a);
            else {
              const l = ta(n[16]);
              jl(l[1], l, a, r, !0);
            }
          }
          t = o ? t.projectionNext : t.next;
        }
        return r;
      }
      class aa {
        constructor(n, t) {
          (this._lView = n),
            (this._cdRefInjectingView = t),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const n = this._lView,
            t = n[1];
          return jl(t, n, t.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(n) {
          this._lView[8] = n;
        }
        get destroyed() {
          return 128 == (128 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const n = this._lView[3];
            if (ur(n)) {
              const t = n[8],
                r = t ? t.indexOf(this) : -1;
              r > -1 && (Ku(n, r), _l(t, r));
            }
            this._attachedToViewContainer = !1;
          }
          Ng(this._lView[1], this._lView);
        }
        onDestroy(n) {
          !(function Zm(e, n, t, r) {
            const o = (function sv(e) {
              return e[7] || (e[7] = []);
            })(n);
            null === t
              ? o.push(r)
              : (o.push(t),
                e.firstCreatePass &&
                  (function av(e) {
                    return e.cleanup || (e.cleanup = []);
                  })(e).push(r, o.length - 1));
          })(this._lView[1], this._lView, null, n);
        }
        markForCheck() {
          !(function Hd(e) {
            for (; e; ) {
              e[2] |= 32;
              const n = ta(e);
              if (Jw(e) && !n) return e;
              e = n;
            }
            return null;
          })(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -65;
        }
        reattach() {
          this._lView[2] |= 64;
        }
        detectChanges() {
          Vl(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new _(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function UE(e, n) {
              na(e, n, n[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(n) {
          if (this._attachedToViewContainer) throw new _(902, !1);
          this._appRef = n;
        }
      }
      class cM extends aa {
        constructor(n) {
          super(n), (this._view = n);
        }
        detectChanges() {
          const n = this._view;
          Vl(n[1], n, n[8], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class Gd extends Wr {
        constructor(n) {
          super(), (this.ngModule = n);
        }
        resolveComponentFactory(n) {
          const t = vt(n);
          return new la(t, this.ngModule);
        }
      }
      function uv(e) {
        const n = [];
        for (let t in e) e.hasOwnProperty(t) && n.push({ propName: e[t], templateName: t });
        return n;
      }
      class dM {
        constructor(n, t) {
          (this.injector = n), (this.parentInjector = t);
        }
        get(n, t, r) {
          const o = this.injector.get(n, md, r);
          return o !== md || t === md ? o : this.parentInjector.get(n, t, r);
        }
      }
      class la extends gm {
        constructor(n, t) {
          super(),
            (this.componentDef = n),
            (this.ngModule = t),
            (this.componentType = n.type),
            (this.selector = (function uS(e) {
              return e.map(cS).join(',');
            })(n.selectors)),
            (this.ngContentSelectors = n.ngContentSelectors ? n.ngContentSelectors : []),
            (this.isBoundToModule = !!t);
        }
        get inputs() {
          return uv(this.componentDef.inputs);
        }
        get outputs() {
          return uv(this.componentDef.outputs);
        }
        create(n, t, r, o) {
          let i = (o = o || this.ngModule) instanceof Co ? o : o?.injector;
          i &&
            null !== this.componentDef.getStandaloneInjector &&
            (i = this.componentDef.getStandaloneInjector(i) || i);
          const s = i ? new dM(n, i) : n,
            a = s.get(vm, null);
          if (null === a) throw new _(407, !1);
          const l = s.get(UI, null),
            c = a.createRenderer(null, this.componentDef),
            u = this.componentDef.selectors[0][0] || 'div',
            d = r
              ? (function zS(e, n, t) {
                  return e.selectRootElement(n, t === Ir.ShadowDom);
                })(c, r, this.componentDef.encapsulation)
              : qu(
                  c,
                  u,
                  (function uM(e) {
                    const n = e.toLowerCase();
                    return 'svg' === n ? 'svg' : 'math' === n ? 'math' : null;
                  })(u),
                ),
            g = this.componentDef.onPush ? 288 : 272,
            y = $d(0, null, null, 1, 0, null, null, null, null, null),
            w = Nl(null, y, null, g, null, null, a, c, l, s, null);
          let F, V;
          Cu(w);
          try {
            const ie = (function pM(e, n, t, r, o, i) {
              const s = t[1];
              t[22] = e;
              const l = Ki(s, 22, 2, '#host', null),
                c = (l.mergedAttrs = n.hostAttrs);
              null !== c &&
                (Bl(l, c, !0),
                null !== e &&
                  (hl(o, e, c), null !== l.classes && ed(o, e, l.classes), null !== l.styles && qg(o, e, l.styles)));
              const u = r.createRenderer(e, n),
                d = Nl(t, Ym(n), null, n.onPush ? 32 : 16, t[22], l, r, u, i || null, null, null);
              return (
                s.firstCreatePass && (vl(Hs(l, t), s, n.type), nv(s, l), rv(l, t.length, 1)), $l(t, d), (t[22] = d)
              );
            })(d, this.componentDef, w, a, c);
            if (d)
              if (r) hl(c, d, ['ng-version', zI.full]);
              else {
                const { attrs: ye, classes: B } = (function dS(e) {
                  const n = [],
                    t = [];
                  let r = 1,
                    o = 2;
                  for (; r < e.length; ) {
                    let i = e[r];
                    if ('string' == typeof i) 2 === o ? '' !== i && n.push(i, e[++r]) : 8 === o && t.push(i);
                    else {
                      if (!fr(o)) break;
                      o = i;
                    }
                    r++;
                  }
                  return { attrs: n, classes: t };
                })(this.componentDef.selectors[0]);
                ye && hl(c, d, ye), B && B.length > 0 && ed(c, d, B.join(' '));
              }
            if (((V = pu(y, 22)), void 0 !== t)) {
              const ye = (V.projection = []);
              for (let B = 0; B < this.ngContentSelectors.length; B++) {
                const Oe = t[B];
                ye.push(null != Oe ? Array.from(Oe) : null);
              }
            }
            (F = (function gM(e, n, t, r) {
              const o = t[1],
                i = (function KS(e, n, t) {
                  const r = Kt();
                  e.firstCreatePass &&
                    (t.providersResolver && t.providersResolver(t), ov(e, r, n, Yi(e, n, 1, null), t), Qm(e, r));
                  const o = Us(n, e, r.directiveStart, r);
                  an(o, n);
                  const i = Vn(r, n);
                  return i && an(i, n), o;
                })(o, t, n);
              if (((e[8] = t[8] = i), null !== r)) for (const a of r) a(i, n);
              if (n.contentQueries) {
                const a = Kt();
                n.contentQueries(1, i, a.directiveStart);
              }
              const s = Kt();
              return (
                !o.firstCreatePass ||
                  (null === n.hostBindings && null === n.hostAttrs) ||
                  (yo(s.index), ev(t[1], s, 0, s.directiveStart, s.directiveEnd, n), tv(n, i)),
                i
              );
            })(ie, this.componentDef, w, [mM])),
              kd(y, w, null);
          } finally {
            bu();
          }
          return new hM(this.componentType, F, zi(V, w), w, V);
        }
      }
      class hM extends class LI {} {
        constructor(n, t, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.instance = t),
            (this.hostView = this.changeDetectorRef = new cM(o)),
            (this.componentType = n);
        }
        setInput(n, t) {
          const r = this._tNode.inputs;
          let o;
          if (null !== r && (o = r[n])) {
            const i = this._rootLView;
            zd(i[1], i, o, n, t), Jm(i, this._tNode.index);
          }
        }
        get injector() {
          return new Pi(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(n) {
          this.hostView.onDestroy(n);
        }
      }
      function mM() {
        const e = Kt();
        ul(Y()[1], e);
      }
      let Hl = null;
      function Jo() {
        if (!Hl) {
          const e = wt.Symbol;
          if (e && e.iterator) Hl = e.iterator;
          else {
            const n = Object.getOwnPropertyNames(Map.prototype);
            for (let t = 0; t < n.length; ++t) {
              const r = n[t];
              'entries' !== r && 'size' !== r && Map.prototype[r] === Map.prototype.entries && (Hl = r);
            }
          }
        }
        return Hl;
      }
      function ca(e) {
        return (
          !!(function qd(e) {
            return null !== e && ('function' == typeof e || 'object' == typeof e);
          })(e) &&
          (Array.isArray(e) || (!(e instanceof Map) && Jo() in e))
        );
      }
      function ln(e, n, t) {
        return !Object.is(e[n], t) && ((e[n] = t), !0);
      }
      function Xr(e, n, t) {
        const r = Y();
        return (
          ln(r, Fi(), n) &&
            (function Un(e, n, t, r, o, i, s, a) {
              const l = Vn(n, t);
              let u,
                c = n.inputs;
              !a && null != c && (u = c[r])
                ? (zd(e, t, u, r, o), sl(n) && Jm(t, n.index))
                : 3 & n.type &&
                  ((r = (function WS(e) {
                    return 'class' === e
                      ? 'className'
                      : 'for' === e
                      ? 'htmlFor'
                      : 'formaction' === e
                      ? 'formAction'
                      : 'innerHtml' === e
                      ? 'innerHTML'
                      : 'readonly' === e
                      ? 'readOnly'
                      : 'tabindex' === e
                      ? 'tabIndex'
                      : e;
                  })(r)),
                  (o = null != s ? s(o, n.value || '', r) : o),
                  i.setProperty(l, r, o));
            })(
              lt(),
              (function xt() {
                const e = Ye.lFrame;
                return pu(e.tView, e.selectedIndex);
              })(),
              r,
              e,
              n,
              r[11],
              t,
              !1,
            ),
          Xr
        );
      }
      function Kd(e, n, t, r, o) {
        const s = o ? 'class' : 'style';
        zd(e, t, n.inputs[s], s, r);
      }
      function A(e, n, t, r) {
        const o = Y(),
          i = lt(),
          s = 22 + e,
          a = o[11],
          l = (o[s] = qu(
            a,
            n,
            (function R0() {
              return Ye.lFrame.currentNamespace;
            })(),
          )),
          c = i.firstCreatePass
            ? (function FM(e, n, t, r, o, i, s) {
                const a = n.consts,
                  c = Ki(n, e, 2, o, vo(a, i));
                return (
                  Vd(n, t, c, vo(a, s)),
                  null !== c.attrs && Bl(c, c.attrs, !1),
                  null !== c.mergedAttrs && Bl(c, c.mergedAttrs, !0),
                  null !== n.queries && n.queries.elementStart(n, c),
                  c
                );
              })(s, i, o, 0, n, t, r)
            : i.data[s];
        Sr(c, !0);
        const u = c.mergedAttrs;
        null !== u && hl(a, l, u);
        const d = c.classes;
        null !== d && ed(a, l, d);
        const g = c.styles;
        return (
          null !== g && qg(a, l, g),
          64 != (64 & c.flags) && Il(i, o, l, c),
          0 ===
            (function p0() {
              return Ye.lFrame.elementDepthCount;
            })() && an(l, o),
          (function g0() {
            Ye.lFrame.elementDepthCount++;
          })(),
          al(c) &&
            (Nd(i, o, c),
            (function Km(e, n, t) {
              if (cu(n)) {
                const o = n.directiveEnd;
                for (let i = n.directiveStart; i < o; i++) {
                  const s = e.data[i];
                  s.contentQueries && s.contentQueries(1, t[i], i);
                }
              }
            })(i, c, o)),
          null !== r && Ld(o, c),
          A
        );
      }
      function I() {
        let e = Kt();
        mu() ? vu() : ((e = e.parent), Sr(e, !1));
        const n = e;
        !(function m0() {
          Ye.lFrame.elementDepthCount--;
        })();
        const t = lt();
        return (
          t.firstCreatePass && (ul(t, e), cu(e) && t.queries.elementEnd(e)),
          null != n.classesWithoutHost &&
            (function L0(e) {
              return 0 != (16 & e.flags);
            })(n) &&
            Kd(t, n, Y(), n.classesWithoutHost, !0),
          null != n.stylesWithoutHost &&
            (function $0(e) {
              return 0 != (32 & e.flags);
            })(n) &&
            Kd(t, n, Y(), n.stylesWithoutHost, !1),
          I
        );
      }
      function Pe(e, n, t, r) {
        return A(e, n, t, r), I(), Pe;
      }
      function da(e) {
        return !!e && 'function' == typeof e.then;
      }
      const Xd = function Cv(e) {
        return !!e && 'function' == typeof e.subscribe;
      };
      function kM(e, n) {
        let t = null;
        const r = (function iS(e) {
          const n = e.attrs;
          if (null != n) {
            const t = n.indexOf(5);
            if (0 == (1 & t)) return n[t + 1];
          }
          return null;
        })(e);
        for (let o = 0; o < n.length; o++) {
          const i = n[o];
          if ('*' !== i) {
            if (null === r ? bm(e, i, !0) : lS(r, i)) return o;
          } else t = o;
        }
        return t;
      }
      function kv(e, n, t, r, o) {
        const i = e[t + 1],
          s = null === n;
        let a = r ? hr(i) : Yr(i),
          l = !1;
        for (; 0 !== a && (!1 === l || s); ) {
          const u = e[a + 1];
          $M(e[a], n) && ((l = !0), (e[a + 1] = r ? Sd(u) : Ed(u))), (a = r ? hr(u) : Yr(u));
        }
        l && (e[t + 1] = r ? Ed(i) : Sd(i));
      }
      function $M(e, n) {
        return (
          null === e ||
          null == n ||
          (Array.isArray(e) ? e[1] : e) === n ||
          (!(!Array.isArray(e) || 'string' != typeof n) && Vi(e, n) >= 0)
        );
      }
      function ef(e, n, t) {
        return (
          (function pr(e, n, t, r) {
            const o = Y(),
              i = lt(),
              s = (function Ur(e) {
                const n = Ye.lFrame,
                  t = n.bindingIndex;
                return (n.bindingIndex = n.bindingIndex + e), t;
              })(2);
            i.firstUpdatePass &&
              (function Uv(e, n, t, r) {
                const o = e.data;
                if (null === o[t + 1]) {
                  const i = o[_n()],
                    s = (function Hv(e, n) {
                      return n >= e.expandoStartIndex;
                    })(e, t);
                  (function qv(e, n) {
                    return 0 != (e.flags & (n ? 16 : 32));
                  })(i, r) &&
                    null === n &&
                    !s &&
                    (n = !1),
                    (n = (function qM(e, n, t, r) {
                      const o = (function _u(e) {
                        const n = Ye.lFrame.currentDirectiveIndex;
                        return -1 === n ? null : e[n];
                      })(e);
                      let i = r ? n.residualClasses : n.residualStyles;
                      if (null === o)
                        0 === (r ? n.classBindings : n.styleBindings) &&
                          ((t = fa((t = tf(null, e, n, t, r)), n.attrs, r)), (i = null));
                      else {
                        const s = n.directiveStylingLast;
                        if (-1 === s || e[s] !== o)
                          if (((t = tf(o, e, n, t, r)), null === i)) {
                            let l = (function KM(e, n, t) {
                              const r = t ? n.classBindings : n.styleBindings;
                              if (0 !== Yr(r)) return e[hr(r)];
                            })(e, n, r);
                            void 0 !== l &&
                              Array.isArray(l) &&
                              ((l = tf(null, e, n, l[1], r)),
                              (l = fa(l, n.attrs, r)),
                              (function YM(e, n, t, r) {
                                e[hr(t ? n.classBindings : n.styleBindings)] = r;
                              })(e, n, r, l));
                          } else
                            i = (function ZM(e, n, t) {
                              let r;
                              const o = n.directiveEnd;
                              for (let i = 1 + n.directiveStylingLast; i < o; i++) r = fa(r, e[i].hostAttrs, t);
                              return fa(r, n.attrs, t);
                            })(e, n, r);
                      }
                      return void 0 !== i && (r ? (n.residualClasses = i) : (n.residualStyles = i)), t;
                    })(o, i, n, r)),
                    (function NM(e, n, t, r, o, i) {
                      let s = i ? n.classBindings : n.styleBindings,
                        a = hr(s),
                        l = Yr(s);
                      e[r] = t;
                      let u,
                        c = !1;
                      if (Array.isArray(t)) {
                        const d = t;
                        (u = d[1]), (null === u || Vi(d, u) > 0) && (c = !0);
                      } else u = t;
                      if (o)
                        if (0 !== l) {
                          const g = hr(e[a + 1]);
                          (e[r + 1] = Ol(g, a)),
                            0 !== g && (e[g + 1] = Id(e[g + 1], r)),
                            (e[a + 1] = (function xS(e, n) {
                              return (131071 & e) | (n << 17);
                            })(e[a + 1], r));
                        } else (e[r + 1] = Ol(a, 0)), 0 !== a && (e[a + 1] = Id(e[a + 1], r)), (a = r);
                      else (e[r + 1] = Ol(l, 0)), 0 === a ? (a = r) : (e[l + 1] = Id(e[l + 1], r)), (l = r);
                      c && (e[r + 1] = Ed(e[r + 1])),
                        kv(e, u, r, !0),
                        kv(e, u, r, !1),
                        (function LM(e, n, t, r, o) {
                          const i = o ? e.residualClasses : e.residualStyles;
                          null != i && 'string' == typeof n && Vi(i, n) >= 0 && (t[r + 1] = Sd(t[r + 1]));
                        })(n, u, e, r, i),
                        (s = Ol(a, l)),
                        i ? (n.classBindings = s) : (n.styleBindings = s);
                    })(o, i, n, t, s, r);
                }
              })(i, e, s, r),
              n !== Xe &&
                ln(o, s, n) &&
                (function Gv(e, n, t, r, o, i, s, a) {
                  if (!(3 & n.type)) return;
                  const l = e.data,
                    c = l[a + 1];
                  ql(
                    (function $m(e) {
                      return 1 == (1 & e);
                    })(c)
                      ? Wv(l, n, t, o, Yr(c), s)
                      : void 0,
                  ) ||
                    (ql(i) ||
                      ((function Lm(e) {
                        return 2 == (2 & e);
                      })(c) &&
                        (i = Wv(l, null, t, o, a, s))),
                    (function JE(e, n, t, r, o) {
                      if (n) o ? e.addClass(t, r) : e.removeClass(t, r);
                      else {
                        let i = -1 === r.indexOf('-') ? void 0 : Tn.DashCase;
                        null == o
                          ? e.removeStyle(t, r, i)
                          : ('string' == typeof o &&
                              o.endsWith('!important') &&
                              ((o = o.slice(0, -10)), (i |= Tn.Important)),
                            e.setStyle(t, r, o, i));
                      }
                    })(r, s, ll(_n(), t), o, i));
                })(
                  i,
                  i.data[_n()],
                  o,
                  o[11],
                  e,
                  (o[s + 1] = (function JM(e, n) {
                    return (
                      null == e ||
                        ('string' == typeof n
                          ? (e += n)
                          : 'object' == typeof e &&
                            (e = dt(
                              (function Do(e) {
                                return e instanceof
                                  class Qg {
                                    constructor(n) {
                                      this.changingThisBreaksApplicationSecurity = n;
                                    }
                                    toString() {
                                      return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
                                    }
                                  }
                                  ? e.changingThisBreaksApplicationSecurity
                                  : e;
                              })(e),
                            ))),
                      e
                    );
                  })(n, t)),
                  r,
                  s,
                );
          })(e, n, t, !1),
          ef
        );
      }
      function tf(e, n, t, r, o) {
        let i = null;
        const s = t.directiveEnd;
        let a = t.directiveStylingLast;
        for (-1 === a ? (a = t.directiveStart) : a++; a < s && ((i = n[a]), (r = fa(r, i.hostAttrs, o)), i !== e); )
          a++;
        return null !== e && (t.directiveStylingLast = a), r;
      }
      function fa(e, n, t) {
        const r = t ? 1 : 2;
        let o = -1;
        if (null !== n)
          for (let i = 0; i < n.length; i++) {
            const s = n[i];
            'number' == typeof s
              ? (o = s)
              : o === r && (Array.isArray(e) || (e = void 0 === e ? [] : ['', e]), Hn(e, s, !!t || n[++i]));
          }
        return void 0 === e ? null : e;
      }
      function Wv(e, n, t, r, o, i) {
        const s = null === n;
        let a;
        for (; o > 0; ) {
          const l = e[o],
            c = Array.isArray(l),
            u = c ? l[1] : l,
            d = null === u;
          let g = t[o + 1];
          g === Xe && (g = d ? ft : void 0);
          let y = d ? Fu(g, r) : u === r ? g : void 0;
          if ((c && !ql(y) && (y = Fu(l, r)), ql(y) && ((a = y), s))) return a;
          const w = e[o + 1];
          o = s ? hr(w) : Yr(w);
        }
        if (null !== n) {
          let l = i ? n.residualClasses : n.residualStyles;
          null != l && (a = Fu(l, r));
        }
        return a;
      }
      function ql(e) {
        return void 0 !== e;
      }
      function X(e, n = '') {
        const t = Y(),
          r = lt(),
          o = e + 22,
          i = r.firstCreatePass ? Ki(r, o, 1, n, null) : r.data[o],
          s = (t[o] = (function Wu(e, n) {
            return e.createText(n);
          })(t[11], n));
        Il(r, t, s, i), Sr(i, !1);
      }
      function nf(e) {
        return Kl('', e, ''), nf;
      }
      function Kl(e, n, t) {
        const r = Y(),
          o = (function Xi(e, n, t, r) {
            return ln(e, Fi(), t) ? n + v(t) + r : Xe;
          })(r, e, n, t);
        return (
          o !== Xe &&
            (function Zr(e, n, t) {
              const r = ll(n, e);
              !(function Pg(e, n, t) {
                e.setValue(n, t);
              })(e[11], r, t);
            })(r, _n(), o),
          Kl
        );
      }
      const as = 'en-US';
      let gy = as;
      class ni {}
      class jy {}
      class Hy extends ni {
        constructor(n, t) {
          super(),
            (this._parent = t),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Gd(this));
          const r = Ln(n);
          (this._bootstrapComponents = Kr(r.bootstrap)),
            (this._r3Injector = Tm(
              n,
              t,
              [
                { provide: ni, useValue: this },
                { provide: Wr, useValue: this.componentFactoryResolver },
              ],
              dt(n),
              new Set(['environment']),
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(n));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const n = this._r3Injector;
          !n.destroyed && n.destroy(), this.destroyCbs.forEach((t) => t()), (this.destroyCbs = null);
        }
        onDestroy(n) {
          this.destroyCbs.push(n);
        }
      }
      class df extends jy {
        constructor(n) {
          super(), (this.moduleType = n);
        }
        create(n) {
          return new Hy(this.moduleType, n);
        }
      }
      class _A extends ni {
        constructor(n, t, r) {
          super(), (this.componentFactoryResolver = new Gd(this)), (this.instance = null);
          const o = new hm(
            [...n, { provide: ni, useValue: this }, { provide: Wr, useValue: this.componentFactoryResolver }],
            t || Fl(),
            r,
            new Set(['environment']),
          );
          (this.injector = o), o.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(n) {
          this.injector.onDestroy(n);
        }
      }
      function Jl(e, n, t = null) {
        return new _A(e, n, t).injector;
      }
      let DA = (() => {
        class e {
          constructor(t) {
            (this._injector = t), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(t) {
            if (!t.standalone) return null;
            if (!this.cachedInjectors.has(t.id)) {
              const r = cm(0, t.type),
                o = r.length > 0 ? Jl([r], this._injector, `Standalone[${t.type.name}]`) : null;
              this.cachedInjectors.set(t.id, o);
            }
            return this.cachedInjectors.get(t.id);
          }
          ngOnDestroy() {
            try {
              for (const t of this.cachedInjectors.values()) null !== t && t.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
        }
        return (e.ɵprov = Ge({ token: e, providedIn: 'environment', factory: () => new e(Se(Co)) })), e;
      })();
      function Uy(e) {
        e.getStandaloneInjector = (n) => n.get(DA).getOrCreateStandaloneInjector(e);
      }
      function hf(e) {
        return (n) => {
          setTimeout(e, void 0, n);
        };
      }
      const Dt = class WA extends q {
        constructor(n = !1) {
          super(), (this.__isAsync = n);
        }
        emit(n) {
          super.next(n);
        }
        subscribe(n, t, r) {
          let o = n,
            i = t || (() => null),
            s = r;
          if (n && 'object' == typeof n) {
            const l = n;
            (o = l.next?.bind(l)), (i = l.error?.bind(l)), (s = l.complete?.bind(l));
          }
          this.__isAsync && ((i = hf(i)), o && (o = hf(o)), s && (s = hf(s)));
          const a = super.subscribe({ next: o, error: i, complete: s });
          return n instanceof ke && n.add(a), a;
        }
      };
      let xn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = ZA), e;
      })();
      const KA = xn,
        YA = class extends KA {
          constructor(n, t, r) {
            super(), (this._declarationLView = n), (this._declarationTContainer = t), (this.elementRef = r);
          }
          createEmbeddedView(n, t) {
            const r = this._declarationTContainer.tViews,
              o = Nl(this._declarationLView, r, n, 16, null, r.declTNode, null, null, null, null, t || null);
            o[17] = this._declarationLView[this._declarationTContainer.index];
            const s = this._declarationLView[19];
            return null !== s && (o[19] = s.createEmbeddedView(r)), kd(r, o, n), new aa(o);
          }
        };
      function ZA() {
        return (function ec(e, n) {
          return 4 & e.type ? new YA(n, e, zi(e, n)) : null;
        })(Kt(), Y());
      }
      let Fn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = XA), e;
      })();
      function XA() {
        return (function r_(e, n) {
          let t;
          const r = n[e.index];
          if (ur(r)) t = r;
          else {
            let o;
            if (8 & e.type) o = Ut(r);
            else {
              const i = n[11];
              o = i.createComment('');
              const s = Vn(e, n);
              Zo(
                i,
                El(i, s),
                o,
                (function ZE(e, n) {
                  return e.nextSibling(n);
                })(i, s),
                !1,
              );
            }
            (n[e.index] = t = iv(r, n, o, e)), $l(n, t);
          }
          return new t_(t, e, n);
        })(Kt(), Y());
      }
      const QA = Fn,
        t_ = class extends QA {
          constructor(n, t, r) {
            super(), (this._lContainer = n), (this._hostTNode = t), (this._hostLView = r);
          }
          get element() {
            return zi(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Pi(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const n = ml(this._hostTNode, this._hostLView);
            if (Xp(n)) {
              const t = Oi(n, this._hostLView),
                r = Ri(n);
              return new Pi(t[1].data[r + 8], t);
            }
            return new Pi(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(n) {
            const t = n_(this._lContainer);
            return (null !== t && t[n]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(n, t, r) {
            let o, i;
            'number' == typeof r ? (o = r) : null != r && ((o = r.index), (i = r.injector));
            const s = n.createEmbeddedView(t || {}, i);
            return this.insert(s, o), s;
          }
          createComponent(n, t, r, o, i) {
            const s =
              n &&
              !(function Gs(e) {
                return 'function' == typeof e;
              })(n);
            let a;
            if (s) a = t;
            else {
              const d = t || {};
              (a = d.index), (r = d.injector), (o = d.projectableNodes), (i = d.environmentInjector || d.ngModuleRef);
            }
            const l = s ? n : new la(vt(n)),
              c = r || this.parentInjector;
            if (!i && null == l.ngModule) {
              const g = (s ? c : this.parentInjector).get(Co, null);
              g && (i = g);
            }
            const u = l.create(c, o, void 0, i);
            return this.insert(u.hostView, a), u;
          }
          insert(n, t) {
            const r = n._lView,
              o = r[1];
            if (
              (function h0(e) {
                return ur(e[3]);
              })(r)
            ) {
              const u = this.indexOf(n);
              if (-1 !== u) this.detach(u);
              else {
                const d = r[3],
                  g = new t_(d, d[6], d[3]);
                g.detach(g.indexOf(n));
              }
            }
            const i = this._adjustIndex(t),
              s = this._lContainer;
            !(function GE(e, n, t, r) {
              const o = 10 + r,
                i = t.length;
              r > 0 && (t[o - 1][4] = n),
                r < i - 10 ? ((n[4] = t[o]), lg(t, 10 + r, n)) : (t.push(n), (n[4] = null)),
                (n[3] = t);
              const s = n[17];
              null !== s &&
                t !== s &&
                (function WE(e, n) {
                  const t = e[9];
                  n[16] !== n[3][3][16] && (e[2] = !0), null === t ? (e[9] = [n]) : t.push(n);
                })(s, n);
              const a = n[19];
              null !== a && a.insertView(e), (n[2] |= 64);
            })(o, r, s, i);
            const a = Xu(i, s),
              l = r[11],
              c = El(l, s[7]);
            return (
              null !== c &&
                (function HE(e, n, t, r, o, i) {
                  (r[0] = o), (r[6] = n), na(e, r, t, 1, o, i);
                })(o, s[6], l, r, c, a),
              n.attachToViewContainerRef(),
              lg(gf(s), i, n),
              n
            );
          }
          move(n, t) {
            return this.insert(n, t);
          }
          indexOf(n) {
            const t = n_(this._lContainer);
            return null !== t ? t.indexOf(n) : -1;
          }
          remove(n) {
            const t = this._adjustIndex(n, -1),
              r = Ku(this._lContainer, t);
            r && (_l(gf(this._lContainer), t), Ng(r[1], r));
          }
          detach(n) {
            const t = this._adjustIndex(n, -1),
              r = Ku(this._lContainer, t);
            return r && null != _l(gf(this._lContainer), t) ? new aa(r) : null;
          }
          _adjustIndex(n, t = 0) {
            return n ?? this.length + t;
          }
        };
      function n_(e) {
        return e[8];
      }
      function gf(e) {
        return e[8] || (e[8] = []);
      }
      function nc(...e) {}
      const Ca = new Le('Application Initializer');
      let rc = (() => {
        class e {
          constructor(t) {
            (this.appInits = t),
              (this.resolve = nc),
              (this.reject = nc),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, o) => {
                (this.resolve = r), (this.reject = o);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let o = 0; o < this.appInits.length; o++) {
                const i = this.appInits[o]();
                if (da(i)) t.push(i);
                else if (Xd(i)) {
                  const s = new Promise((a, l) => {
                    i.subscribe({ complete: a, error: l });
                  });
                  t.push(s);
                }
              }
            Promise.all(t)
              .then(() => {
                r();
              })
              .catch((o) => {
                this.reject(o);
              }),
              0 === t.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Se(Ca, 8));
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const ba = new Le('AppId', {
        providedIn: 'root',
        factory: function A_() {
          return `${If()}${If()}${If()}`;
        },
      });
      function If() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const T_ = new Le('Platform Initializer'),
        x_ = new Le('Platform ID', { providedIn: 'platform', factory: () => 'unknown' }),
        F_ = new Le('appBootstrapListener');
      let MT = (() => {
        class e {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
          e
        );
      })();
      const Jr = new Le('LocaleId', {
        providedIn: 'root',
        factory: () =>
          Vt(Jr, Be.Optional | Be.SkipSelf) ||
          (function AT() {
            return (typeof $localize < 'u' && $localize.locale) || as;
          })(),
      });
      class xT {
        constructor(n, t) {
          (this.ngModuleFactory = n), (this.componentFactories = t);
        }
      }
      let Sf = (() => {
        class e {
          compileModuleSync(t) {
            return new df(t);
          }
          compileModuleAsync(t) {
            return Promise.resolve(this.compileModuleSync(t));
          }
          compileModuleAndAllComponentsSync(t) {
            const r = this.compileModuleSync(t),
              i = Kr(Ln(t).declarations).reduce((s, a) => {
                const l = vt(a);
                return l && s.push(new la(l)), s;
              }, []);
            return new xT(r, i);
          }
          compileModuleAndAllComponentsAsync(t) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(t));
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const OT = (() => Promise.resolve(0))();
      function Mf(e) {
        typeof Zone > 'u'
          ? OT.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class J {
        constructor({
          enableLongStackTrace: n = !1,
          shouldCoalesceEventChangeDetection: t = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Dt(!1)),
            (this.onMicrotaskEmpty = new Dt(!1)),
            (this.onStable = new Dt(!1)),
            (this.onError = new Dt(!1)),
            typeof Zone > 'u')
          )
            throw new _(908, !1);
          Zone.assertZonePatched();
          const o = this;
          if (((o._nesting = 0), (o._outer = o._inner = Zone.current), Zone.AsyncStackTaggingZoneSpec)) {
            const i = Zone.AsyncStackTaggingZoneSpec;
            o._inner = o._inner.fork(new i('Angular'));
          }
          Zone.TaskTrackingZoneSpec && (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            n && Zone.longStackTraceZoneSpec && (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !r && t),
            (o.shouldCoalesceRunChangeDetection = r),
            (o.lastRequestAnimationFrameId = -1),
            (o.nativeRequestAnimationFrame = (function PT() {
              let e = wt.requestAnimationFrame,
                n = wt.cancelAnimationFrame;
              if (typeof Zone < 'u' && e && n) {
                const t = e[Zone.__symbol__('OriginalDelegate')];
                t && (e = t);
                const r = n[Zone.__symbol__('OriginalDelegate')];
                r && (n = r);
              }
              return { nativeRequestAnimationFrame: e, nativeCancelAnimationFrame: n };
            })().nativeRequestAnimationFrame),
            (function LT(e) {
              const n = () => {
                !(function NT(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(wt, () => {
                      e.fakeTopEventTask ||
                        (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                          'fakeTopEventTask',
                          () => {
                            (e.lastRequestAnimationFrameId = -1),
                              Tf(e),
                              (e.isCheckStableRunning = !0),
                              Af(e),
                              (e.isCheckStableRunning = !1);
                          },
                          void 0,
                          () => {},
                          () => {},
                        )),
                        e.fakeTopEventTask.invoke();
                    })),
                    Tf(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (t, r, o, i, s, a) => {
                  try {
                    return P_(e), t.invokeTask(o, i, s, a);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection && 'eventTask' === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      n(),
                      k_(e);
                  }
                },
                onInvoke: (t, r, o, i, s, a, l) => {
                  try {
                    return P_(e), t.invoke(o, i, s, a, l);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && n(), k_(e);
                  }
                },
                onHasTask: (t, r, o, i) => {
                  t.hasTask(o, i),
                    r === o &&
                      ('microTask' == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask), Tf(e), Af(e))
                        : 'macroTask' == i.change && (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (t, r, o, i) => (t.handleError(o, i), e.runOutsideAngular(() => e.onError.emit(i)), !1),
              });
            })(o);
        }
        static isInAngularZone() {
          return typeof Zone < 'u' && !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!J.isInAngularZone()) throw new _(909, !1);
        }
        static assertNotInAngularZone() {
          if (J.isInAngularZone()) throw new _(909, !1);
        }
        run(n, t, r) {
          return this._inner.run(n, t, r);
        }
        runTask(n, t, r, o) {
          const i = this._inner,
            s = i.scheduleEventTask('NgZoneEvent: ' + o, n, kT, nc, nc);
          try {
            return i.runTask(s, t, r);
          } finally {
            i.cancelTask(s);
          }
        }
        runGuarded(n, t, r) {
          return this._inner.runGuarded(n, t, r);
        }
        runOutsideAngular(n) {
          return this._outer.run(n);
        }
      }
      const kT = {};
      function Af(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Tf(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function P_(e) {
        e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function k_(e) {
        e._nesting--, Af(e);
      }
      class $T {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Dt()),
            (this.onMicrotaskEmpty = new Dt()),
            (this.onStable = new Dt()),
            (this.onError = new Dt());
        }
        run(n, t, r) {
          return n.apply(t, r);
        }
        runGuarded(n, t, r) {
          return n.apply(t, r);
        }
        runOutsideAngular(n) {
          return n();
        }
        runTask(n, t, r, o) {
          return n.apply(t, r);
        }
      }
      const N_ = new Le(''),
        oc = new Le('');
      let Rf,
        xf = (() => {
          class e {
            constructor(t, r, o) {
              (this._ngZone = t),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                Rf ||
                  ((function VT(e) {
                    Rf = e;
                  })(o),
                  o.addToWindow(r)),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone = typeof Zone > 'u' ? null : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      J.assertNotInAngularZone(),
                        Mf(() => {
                          (this._isZoneStable = !0), this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Mf(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) => !r.updateCb || !r.updateCb(t) || (clearTimeout(r.timeoutId), !1),
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((t) => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data,
                  }))
                : [];
            }
            addCallback(t, r, o) {
              let i = -1;
              r &&
                r > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter((s) => s.timeoutId !== i)),
                    t(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: t, timeoutId: i, updateCb: o });
            }
            whenStable(t, r, o) {
              if (o && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?',
                );
              this.addCallback(t, r, o), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(t) {
              this.registry.registerApplication(t, this);
            }
            unregisterApplication(t) {
              this.registry.unregisterApplication(t);
            }
            findProviders(t, r, o) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Se(J), Se(Ff), Se(oc));
            }),
            (e.ɵprov = Ge({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Ff = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(t, r) {
              this._applications.set(t, r);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, r = !0) {
              return Rf?.findTestabilityInTree(this, t, r) ?? null;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = Ge({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
            e
          );
        })(),
        Io = null;
      const L_ = new Le('AllowMultipleToken'),
        Of = new Le('PlatformDestroyListeners');
      class $_ {
        constructor(n, t) {
          (this.name = n), (this.token = t);
        }
      }
      function B_(e, n, t = []) {
        const r = `Platform: ${n}`,
          o = new Le(r);
        return (i = []) => {
          let s = Pf();
          if (!s || s.injector.get(L_, !1)) {
            const a = [...t, ...i, { provide: o, useValue: !0 }];
            e
              ? e(a)
              : (function HT(e) {
                  if (Io && !Io.get(L_, !1)) throw new _(400, !1);
                  Io = e;
                  const n = e.get(H_);
                  (function V_(e) {
                    const n = e.get(T_, null);
                    n && n.forEach((t) => t());
                  })(e);
                })(
                  (function j_(e = [], n) {
                    return kt.create({
                      name: n,
                      providers: [
                        { provide: fd, useValue: 'platform' },
                        { provide: Of, useValue: new Set([() => (Io = null)]) },
                        ...e,
                      ],
                    });
                  })(a, r),
                );
          }
          return (function zT(e) {
            const n = Pf();
            if (!n) throw new _(401, !1);
            return n;
          })();
        };
      }
      function Pf() {
        return Io?.get(H_) ?? null;
      }
      let H_ = (() => {
        class e {
          constructor(t) {
            (this._injector = t), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, r) {
            const o = (function z_(e, n) {
                let t;
                return (t = 'noop' === e ? new $T() : ('zone.js' === e ? void 0 : e) || new J(n)), t;
              })(
                r?.ngZone,
                (function U_(e) {
                  return {
                    enableLongStackTrace: !1,
                    shouldCoalesceEventChangeDetection: !(!e || !e.ngZoneEventCoalescing) || !1,
                    shouldCoalesceRunChangeDetection: !(!e || !e.ngZoneRunCoalescing) || !1,
                  };
                })(r),
              ),
              i = [{ provide: J, useValue: o }];
            return o.run(() => {
              const s = kt.create({ providers: i, parent: this.injector, name: t.moduleType.name }),
                a = t.create(s),
                l = a.injector.get(Gi, null);
              if (!l) throw new _(402, !1);
              return (
                o.runOutsideAngular(() => {
                  const c = o.onError.subscribe({
                    next: (u) => {
                      l.handleError(u);
                    },
                  });
                  a.onDestroy(() => {
                    ic(this._modules, a), c.unsubscribe();
                  });
                }),
                (function G_(e, n, t) {
                  try {
                    const r = t();
                    return da(r)
                      ? r.catch((o) => {
                          throw (n.runOutsideAngular(() => e.handleError(o)), o);
                        })
                      : r;
                  } catch (r) {
                    throw (n.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(l, o, () => {
                  const c = a.injector.get(rc);
                  return (
                    c.runInitializers(),
                    c.donePromise.then(
                      () => (
                        (function my(e) {
                          Nn(e, 'Expected localeId to be defined'),
                            'string' == typeof e && (gy = e.toLowerCase().replace(/_/g, '-'));
                        })(a.injector.get(Jr, as) || as),
                        this._moduleDoBootstrap(a),
                        a
                      ),
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, r = []) {
            const o = W_({}, r);
            return (function BT(e, n, t) {
              const r = new df(t);
              return Promise.resolve(r);
            })(0, 0, t).then((i) => this.bootstrapModuleFactory(i, o));
          }
          _moduleDoBootstrap(t) {
            const r = t.injector.get(wa);
            if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach((o) => r.bootstrap(o));
            else {
              if (!t.instance.ngDoBootstrap) throw new _(403, !1);
              t.instance.ngDoBootstrap(r);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new _(404, !1);
            this._modules.slice().forEach((r) => r.destroy()), this._destroyListeners.forEach((r) => r());
            const t = this._injector.get(Of, null);
            t && (t.forEach((r) => r()), t.clear()), (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Se(kt));
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
          e
        );
      })();
      function W_(e, n) {
        return Array.isArray(n) ? n.reduce(W_, e) : { ...e, ...n };
      }
      let wa = (() => {
        class e {
          constructor(t, r, o) {
            (this._zone = t),
              (this._injector = r),
              (this._exceptionHandler = o),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              }));
            const i = new xe((a) => {
                (this._stable =
                  this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    a.next(this._stable), a.complete();
                  });
              }),
              s = new xe((a) => {
                let l;
                this._zone.runOutsideAngular(() => {
                  l = this._zone.onStable.subscribe(() => {
                    J.assertNotInAngularZone(),
                      Mf(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), a.next(!0));
                      });
                  });
                });
                const c = this._zone.onUnstable.subscribe(() => {
                  J.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        a.next(!1);
                      }));
                });
                return () => {
                  l.unsubscribe(), c.unsubscribe();
                };
              });
            this.isStable = (function Uo(...e) {
              const n = Vr(e),
                t = (function Wn(e, n) {
                  return 'number' == typeof jo(e) ? e.pop() : n;
                })(e, 1 / 0),
                r = e;
              return r.length ? (1 === r.length ? $t(r[0]) : ar(t)(bt(r, n))) : kn;
            })(
              i,
              s.pipe(
                (function Ei(e = {}) {
                  const {
                    connector: n = () => new q(),
                    resetOnError: t = !0,
                    resetOnComplete: r = !0,
                    resetOnRefCountZero: o = !0,
                  } = e;
                  return (i) => {
                    let s,
                      a,
                      l,
                      c = 0,
                      u = !1,
                      d = !1;
                    const g = () => {
                        a?.unsubscribe(), (a = void 0);
                      },
                      y = () => {
                        g(), (s = l = void 0), (u = d = !1);
                      },
                      w = () => {
                        const F = s;
                        y(), F?.unsubscribe();
                      };
                    return M((F, V) => {
                      c++, !d && !u && g();
                      const ie = (l = l ?? n());
                      V.add(() => {
                        c--, 0 === c && !d && !u && (a = po(w, o));
                      }),
                        ie.subscribe(V),
                        !s &&
                          c > 0 &&
                          ((s = new S({
                            next: (ye) => ie.next(ye),
                            error: (ye) => {
                              (d = !0), g(), (a = po(y, t, ye)), ie.error(ye);
                            },
                            complete: () => {
                              (u = !0), g(), (a = po(y, r)), ie.complete();
                            },
                          })),
                          $t(F).subscribe(s));
                    })(i);
                  };
                })(),
              ),
            );
          }
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          bootstrap(t, r) {
            const o = t instanceof gm;
            if (!this._injector.get(rc).done)
              throw (
                (!o &&
                  (function Si(e) {
                    const n = vt(e) || gn(e) || mn(e);
                    return null !== n && n.standalone;
                  })(t),
                new _(405, false))
              );
            let s;
            (s = o ? t : this._injector.get(Wr).resolveComponentFactory(t)), this.componentTypes.push(s.componentType);
            const a = (function jT(e) {
                return e.isBoundToModule;
              })(s)
                ? void 0
                : this._injector.get(ni),
              c = s.create(kt.NULL, [], r || s.selector, a),
              u = c.location.nativeElement,
              d = c.injector.get(N_, null);
            return (
              d?.registerApplication(u),
              c.onDestroy(() => {
                this.detachView(c.hostView), ic(this.components, c), d?.unregisterApplication(u);
              }),
              this._loadComponent(c),
              c
            );
          }
          tick() {
            if (this._runningTick) throw new _(101, !1);
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(t));
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const r = t;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(t) {
            const r = t;
            ic(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(F_, [])
                .concat(this._bootstrapListeners)
                .forEach((o) => o(t));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((t) => t()),
                  this._views.slice().forEach((t) => t.destroy()),
                  this._onMicrotaskEmptySubscription.unsubscribe();
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(t) {
            return this._destroyListeners.push(t), () => ic(this._destroyListeners, t);
          }
          destroy() {
            if (this._destroyed) throw new _(406, !1);
            const t = this._injector;
            t.destroy && !t.destroyed && t.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Se(J), Se(Co), Se(Gi));
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function ic(e, n) {
        const t = e.indexOf(n);
        t > -1 && e.splice(t, 1);
      }
      let K_ = !0,
        ce = (() => {
          class e {}
          return (e.__NG_ELEMENT_ID__ = qT), e;
        })();
      function qT(e) {
        return (function KT(e, n, t) {
          if (sl(e) && !t) {
            const r = Bn(e.index, n);
            return new aa(r, r);
          }
          return 47 & e.type ? new aa(n[16], n) : null;
        })(Kt(), Y(), 16 == (16 & e));
      }
      class J_ {
        constructor() {}
        supports(n) {
          return ca(n);
        }
        create(n) {
          return new ex(n);
        }
      }
      const JT = (e, n) => n;
      class ex {
        constructor(n) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = n || JT);
        }
        forEachItem(n) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) n(t);
        }
        forEachOperation(n) {
          let t = this._itHead,
            r = this._removalsHead,
            o = 0,
            i = null;
          for (; t || r; ) {
            const s = !r || (t && t.currentIndex < tD(r, o, i)) ? t : r,
              a = tD(s, o, i),
              l = s.currentIndex;
            if (s === r) o--, (r = r._nextRemoved);
            else if (((t = t._next), null == s.previousIndex)) o++;
            else {
              i || (i = []);
              const c = a - o,
                u = l - o;
              if (c != u) {
                for (let g = 0; g < c; g++) {
                  const y = g < i.length ? i[g] : (i[g] = 0),
                    w = y + g;
                  u <= w && w < c && (i[g] = y + 1);
                }
                i[s.previousIndex] = u - c;
              }
            }
            a !== l && n(s, a, l);
          }
        }
        forEachPreviousItem(n) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) n(t);
        }
        forEachAddedItem(n) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) n(t);
        }
        forEachMovedItem(n) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) n(t);
        }
        forEachRemovedItem(n) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) n(t);
        }
        forEachIdentityChange(n) {
          let t;
          for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) n(t);
        }
        diff(n) {
          if ((null == n && (n = []), !ca(n))) throw new _(900, !1);
          return this.check(n) ? this : null;
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let o,
            i,
            s,
            t = this._itHead,
            r = !1;
          if (Array.isArray(n)) {
            this.length = n.length;
            for (let a = 0; a < this.length; a++)
              (i = n[a]),
                (s = this._trackByFn(a, i)),
                null !== t && Object.is(t.trackById, s)
                  ? (r && (t = this._verifyReinsertion(t, i, s, a)),
                    Object.is(t.item, i) || this._addIdentityChange(t, i))
                  : ((t = this._mismatch(t, i, s, a)), (r = !0)),
                (t = t._next);
          } else
            (o = 0),
              (function IM(e, n) {
                if (Array.isArray(e)) for (let t = 0; t < e.length; t++) n(e[t]);
                else {
                  const t = e[Jo()]();
                  let r;
                  for (; !(r = t.next()).done; ) n(r.value);
                }
              })(n, (a) => {
                (s = this._trackByFn(o, a)),
                  null !== t && Object.is(t.trackById, s)
                    ? (r && (t = this._verifyReinsertion(t, a, s, o)),
                      Object.is(t.item, a) || this._addIdentityChange(t, a))
                    : ((t = this._mismatch(t, a, s, o)), (r = !0)),
                  (t = t._next),
                  o++;
              }),
              (this.length = o);
          return this._truncate(t), (this.collection = n), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let n;
            for (n = this._previousItHead = this._itHead; null !== n; n = n._next) n._nextPrevious = n._next;
            for (n = this._additionsHead; null !== n; n = n._nextAdded) n.previousIndex = n.currentIndex;
            for (this._additionsHead = this._additionsTail = null, n = this._movesHead; null !== n; n = n._nextMoved)
              n.previousIndex = n.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(n, t, r, o) {
          let i;
          return (
            null === n ? (i = this._itTail) : ((i = n._prev), this._remove(n)),
            null !== (n = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null))
              ? (Object.is(n.item, t) || this._addIdentityChange(n, t), this._reinsertAfter(n, i, o))
              : null !== (n = null === this._linkedRecords ? null : this._linkedRecords.get(r, o))
              ? (Object.is(n.item, t) || this._addIdentityChange(n, t), this._moveAfter(n, i, o))
              : (n = this._addAfter(new tx(t, r), i, o)),
            n
          );
        }
        _verifyReinsertion(n, t, r, o) {
          let i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null);
          return (
            null !== i
              ? (n = this._reinsertAfter(i, n._prev, o))
              : n.currentIndex != o && ((n.currentIndex = o), this._addToMoves(n, o)),
            n
          );
        }
        _truncate(n) {
          for (; null !== n; ) {
            const t = n._next;
            this._addToRemovals(this._unlink(n)), (n = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(n, t, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(n);
          const o = n._prevRemoved,
            i = n._nextRemoved;
          return (
            null === o ? (this._removalsHead = i) : (o._nextRemoved = i),
            null === i ? (this._removalsTail = o) : (i._prevRemoved = o),
            this._insertAfter(n, t, r),
            this._addToMoves(n, r),
            n
          );
        }
        _moveAfter(n, t, r) {
          return this._unlink(n), this._insertAfter(n, t, r), this._addToMoves(n, r), n;
        }
        _addAfter(n, t, r) {
          return (
            this._insertAfter(n, t, r),
            (this._additionsTail =
              null === this._additionsTail ? (this._additionsHead = n) : (this._additionsTail._nextAdded = n)),
            n
          );
        }
        _insertAfter(n, t, r) {
          const o = null === t ? this._itHead : t._next;
          return (
            (n._next = o),
            (n._prev = t),
            null === o ? (this._itTail = n) : (o._prev = n),
            null === t ? (this._itHead = n) : (t._next = n),
            null === this._linkedRecords && (this._linkedRecords = new eD()),
            this._linkedRecords.put(n),
            (n.currentIndex = r),
            n
          );
        }
        _remove(n) {
          return this._addToRemovals(this._unlink(n));
        }
        _unlink(n) {
          null !== this._linkedRecords && this._linkedRecords.remove(n);
          const t = n._prev,
            r = n._next;
          return null === t ? (this._itHead = r) : (t._next = r), null === r ? (this._itTail = t) : (r._prev = t), n;
        }
        _addToMoves(n, t) {
          return (
            n.previousIndex === t ||
              (this._movesTail = null === this._movesTail ? (this._movesHead = n) : (this._movesTail._nextMoved = n)),
            n
          );
        }
        _addToRemovals(n) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new eD()),
            this._unlinkedRecords.put(n),
            (n.currentIndex = null),
            (n._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = n), (n._prevRemoved = null))
              : ((n._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = n)),
            n
          );
        }
        _addIdentityChange(n, t) {
          return (
            (n.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = n)
                : (this._identityChangesTail._nextIdentityChange = n)),
            n
          );
        }
      }
      class tx {
        constructor(n, t) {
          (this.item = n),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class nx {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(n) {
          null === this._head
            ? ((this._head = this._tail = n), (n._nextDup = null), (n._prevDup = null))
            : ((this._tail._nextDup = n), (n._prevDup = this._tail), (n._nextDup = null), (this._tail = n));
        }
        get(n, t) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if ((null === t || t <= r.currentIndex) && Object.is(r.trackById, n)) return r;
          return null;
        }
        remove(n) {
          const t = n._prevDup,
            r = n._nextDup;
          return (
            null === t ? (this._head = r) : (t._nextDup = r),
            null === r ? (this._tail = t) : (r._prevDup = t),
            null === this._head
          );
        }
      }
      class eD {
        constructor() {
          this.map = new Map();
        }
        put(n) {
          const t = n.trackById;
          let r = this.map.get(t);
          r || ((r = new nx()), this.map.set(t, r)), r.add(n);
        }
        get(n, t) {
          const o = this.map.get(n);
          return o ? o.get(n, t) : null;
        }
        remove(n) {
          const t = n.trackById;
          return this.map.get(t).remove(n) && this.map.delete(t), n;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function tD(e, n, t) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return t && r < t.length && (o = t[r]), r + n + o;
      }
      function rD() {
        return new Ea([new J_()]);
      }
      let Ea = (() => {
        class e {
          constructor(t) {
            this.factories = t;
          }
          static create(t, r) {
            if (null != r) {
              const o = r.factories.slice();
              t = t.concat(o);
            }
            return new e(t);
          }
          static extend(t) {
            return { provide: e, useFactory: (r) => e.create(t, r || rD()), deps: [[e, new Xs(), new Zs()]] };
          }
          find(t) {
            const r = this.factories.find((o) => o.supports(t));
            if (null != r) return r;
            throw new _(901, !1);
          }
        }
        return (e.ɵprov = Ge({ token: e, providedIn: 'root', factory: rD })), e;
      })();
      const ax = B_(null, 'core', []);
      let lx = (() => {
          class e {
            constructor(t) {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Se(wa));
            }),
            (e.ɵmod = jr({ type: e })),
            (e.ɵinj = Er({})),
            e
          );
        })(),
        lc = null;
      function kr() {
        return lc;
      }
      const cn = new Le('DocumentToken');
      let Vf = (() => {
        class e {
          historyGo(t) {
            throw new Error('Not implemented');
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = Ge({
            token: e,
            factory: function () {
              return (function fx() {
                return Se(iD);
              })();
            },
            providedIn: 'platform',
          })),
          e
        );
      })();
      const hx = new Le('Location Initialized');
      let iD = (() => {
        class e extends Vf {
          constructor(t) {
            super(), (this._doc = t), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return kr().getBaseHref(this._doc);
          }
          onPopState(t) {
            const r = kr().getGlobalEventTarget(this._doc, 'window');
            return r.addEventListener('popstate', t, !1), () => r.removeEventListener('popstate', t);
          }
          onHashChange(t) {
            const r = kr().getGlobalEventTarget(this._doc, 'window');
            return r.addEventListener('hashchange', t, !1), () => r.removeEventListener('hashchange', t);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(t) {
            this.location.pathname = t;
          }
          pushState(t, r, o) {
            sD() ? this._history.pushState(t, r, o) : (this.location.hash = o);
          }
          replaceState(t, r, o) {
            sD() ? this._history.replaceState(t, r, o) : (this.location.hash = o);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(t = 0) {
            this._history.go(t);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Se(cn));
          }),
          (e.ɵprov = Ge({
            token: e,
            factory: function () {
              return (function px() {
                return new iD(Se(cn));
              })();
            },
            providedIn: 'platform',
          })),
          e
        );
      })();
      function sD() {
        return !!window.history.pushState;
      }
      function Bf(e, n) {
        if (0 == e.length) return n;
        if (0 == n.length) return e;
        let t = 0;
        return (
          e.endsWith('/') && t++, n.startsWith('/') && t++, 2 == t ? e + n.substring(1) : 1 == t ? e + n : e + '/' + n
        );
      }
      function aD(e) {
        const n = e.match(/#|\?|$/),
          t = (n && n.index) || e.length;
        return e.slice(0, t - ('/' === e[t - 1] ? 1 : 0)) + e.slice(t);
      }
      function no(e) {
        return e && '?' !== e[0] ? '?' + e : e;
      }
      let ro = (() => {
        class e {
          historyGo(t) {
            throw new Error('Not implemented');
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = Ge({
            token: e,
            factory: function () {
              return Vt(cD);
            },
            providedIn: 'root',
          })),
          e
        );
      })();
      const lD = new Le('appBaseHref');
      let cD = (() => {
          class e extends ro {
            constructor(t, r) {
              super(),
                (this._platformLocation = t),
                (this._removeListenerFns = []),
                (this._baseHref = r ?? this._platformLocation.getBaseHrefFromDOM() ?? Vt(cn).location?.origin ?? '');
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
            }
            onPopState(t) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t),
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return Bf(this._baseHref, t);
            }
            path(t = !1) {
              const r = this._platformLocation.pathname + no(this._platformLocation.search),
                o = this._platformLocation.hash;
              return o && t ? `${r}${o}` : r;
            }
            pushState(t, r, o, i) {
              const s = this.prepareExternalUrl(o + no(i));
              this._platformLocation.pushState(t, r, s);
            }
            replaceState(t, r, o, i) {
              const s = this.prepareExternalUrl(o + no(i));
              this._platformLocation.replaceState(t, r, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(t = 0) {
              this._platformLocation.historyGo?.(t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Se(Vf), Se(lD, 8));
            }),
            (e.ɵprov = Ge({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        gx = (() => {
          class e extends ro {
            constructor(t, r) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != r && (this._baseHref = r);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
            }
            onPopState(t) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t),
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let r = this._platformLocation.hash;
              return null == r && (r = '#'), r.length > 0 ? r.substring(1) : r;
            }
            prepareExternalUrl(t) {
              const r = Bf(this._baseHref, t);
              return r.length > 0 ? '#' + r : r;
            }
            pushState(t, r, o, i) {
              let s = this.prepareExternalUrl(o + no(i));
              0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.pushState(t, r, s);
            }
            replaceState(t, r, o, i) {
              let s = this.prepareExternalUrl(o + no(i));
              0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.replaceState(t, r, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(t = 0) {
              this._platformLocation.historyGo?.(t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Se(Vf), Se(lD, 8));
            }),
            (e.ɵprov = Ge({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Sa = (() => {
          class e {
            constructor(t) {
              (this._subject = new Dt()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = t);
              const r = this._locationStrategy.getBaseHref();
              (this._baseHref = aD(uD(r))),
                this._locationStrategy.onPopState((o) => {
                  this._subject.emit({ url: this.path(!0), pop: !0, state: o.state, type: o.type });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(), (this._urlChangeListeners = []);
            }
            path(t = !1) {
              return this.normalize(this._locationStrategy.path(t));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(t, r = '') {
              return this.path() == this.normalize(t + no(r));
            }
            normalize(t) {
              return e.stripTrailingSlash(
                (function vx(e, n) {
                  return e && n.startsWith(e) ? n.substring(e.length) : n;
                })(this._baseHref, uD(t)),
              );
            }
            prepareExternalUrl(t) {
              return t && '/' !== t[0] && (t = '/' + t), this._locationStrategy.prepareExternalUrl(t);
            }
            go(t, r = '', o = null) {
              this._locationStrategy.pushState(o, '', t, r),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(t + no(r)), o);
            }
            replaceState(t, r = '', o = null) {
              this._locationStrategy.replaceState(o, '', t, r),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(t + no(r)), o);
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(t = 0) {
              this._locationStrategy.historyGo?.(t);
            }
            onUrlChange(t) {
              return (
                this._urlChangeListeners.push(t),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((r) => {
                    this._notifyUrlChangeListeners(r.url, r.state);
                  })),
                () => {
                  const r = this._urlChangeListeners.indexOf(t);
                  this._urlChangeListeners.splice(r, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(), (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(t = '', r) {
              this._urlChangeListeners.forEach((o) => o(t, r));
            }
            subscribe(t, r, o) {
              return this._subject.subscribe({ next: t, error: r, complete: o });
            }
          }
          return (
            (e.normalizeQueryParams = no),
            (e.joinWithSlash = Bf),
            (e.stripTrailingSlash = aD),
            (e.ɵfac = function (t) {
              return new (t || e)(Se(ro));
            }),
            (e.ɵprov = Ge({
              token: e,
              factory: function () {
                return (function mx() {
                  return new Sa(Se(ro));
                })();
              },
              providedIn: 'root',
            })),
            e
          );
        })();
      function uD(e) {
        return e.replace(/\/index.html$/, '');
      }
      class rF {
        constructor(n, t, r, o) {
          (this.$implicit = n), (this.ngForOf = t), (this.index = r), (this.count = o);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let CD = (() => {
        class e {
          constructor(t, r, o) {
            (this._viewContainer = t),
              (this._template = r),
              (this._differs = o),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            this._trackByFn = t;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const t = this._ngForOf;
              !this._differ && t && (this._differ = this._differs.find(t).create(this.ngForTrackBy));
            }
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const r = this._viewContainer;
            t.forEachOperation((o, i, s) => {
              if (null == o.previousIndex)
                r.createEmbeddedView(this._template, new rF(o.item, this._ngForOf, -1, -1), null === s ? void 0 : s);
              else if (null == s) r.remove(null === i ? void 0 : i);
              else if (null !== i) {
                const a = r.get(i);
                r.move(a, s), bD(a, o);
              }
            });
            for (let o = 0, i = r.length; o < i; o++) {
              const a = r.get(o).context;
              (a.index = o), (a.count = i), (a.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange((o) => {
              bD(r.get(o.currentIndex), o);
            });
          }
          static ngTemplateContextGuard(t, r) {
            return !0;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(h(Fn), h(xn), h(Ea));
          }),
          (e.ɵdir = Fe({
            type: e,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: { ngForOf: 'ngForOf', ngForTrackBy: 'ngForTrackBy', ngForTemplate: 'ngForTemplate' },
            standalone: !0,
          })),
          e
        );
      })();
      function bD(e, n) {
        e.context.$implicit = n.item;
      }
      let SD = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = jr({ type: e })),
          (e.ɵinj = Er({})),
          e
        );
      })();
      let PF = (() => {
        class e {}
        return (e.ɵprov = Ge({ token: e, providedIn: 'root', factory: () => new kF(Se(cn), window) })), e;
      })();
      class kF {
        constructor(n, t) {
          (this.document = n), (this.window = t), (this.offset = () => [0, 0]);
        }
        setOffset(n) {
          this.offset = Array.isArray(n) ? () => n : n;
        }
        getScrollPosition() {
          return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0];
        }
        scrollToPosition(n) {
          this.supportsScrolling() && this.window.scrollTo(n[0], n[1]);
        }
        scrollToAnchor(n) {
          if (!this.supportsScrolling()) return;
          const t = (function NF(e, n) {
            const t = e.getElementById(n) || e.getElementsByName(n)[0];
            if (t) return t;
            if ('function' == typeof e.createTreeWalker && e.body && (e.body.createShadowRoot || e.body.attachShadow)) {
              const r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT);
              let o = r.currentNode;
              for (; o; ) {
                const i = o.shadowRoot;
                if (i) {
                  const s = i.getElementById(n) || i.querySelector(`[name="${n}"]`);
                  if (s) return s;
                }
                o = r.nextNode();
              }
            }
            return null;
          })(this.document, n);
          t && (this.scrollToElement(t), t.focus());
        }
        setHistoryScrollRestoration(n) {
          if (this.supportScrollRestoration()) {
            const t = this.window.history;
            t && t.scrollRestoration && (t.scrollRestoration = n);
          }
        }
        scrollToElement(n) {
          const t = n.getBoundingClientRect(),
            r = t.left + this.window.pageXOffset,
            o = t.top + this.window.pageYOffset,
            i = this.offset();
          this.window.scrollTo(r - i[0], o - i[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const n = AD(this.window.history) || AD(Object.getPrototypeOf(this.window.history));
            return !(!n || (!n.writable && !n.set));
          } catch {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return !!this.window && !!this.window.scrollTo && 'pageXOffset' in this.window;
          } catch {
            return !1;
          }
        }
      }
      function AD(e) {
        return Object.getOwnPropertyDescriptor(e, 'scrollRestoration');
      }
      class oh extends class tR extends class dx {} {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      } {
        static makeCurrent() {
          !(function ux(e) {
            lc || (lc = e);
          })(new oh());
        }
        onAndCancel(n, t, r) {
          return (
            n.addEventListener(t, r, !1),
            () => {
              n.removeEventListener(t, r, !1);
            }
          );
        }
        dispatchEvent(n, t) {
          n.dispatchEvent(t);
        }
        remove(n) {
          n.parentNode && n.parentNode.removeChild(n);
        }
        createElement(n, t) {
          return (t = t || this.getDefaultDocument()).createElement(n);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(n) {
          return n.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(n) {
          return n instanceof DocumentFragment;
        }
        getGlobalEventTarget(n, t) {
          return 'window' === t ? window : 'document' === t ? n : 'body' === t ? n.body : null;
        }
        getBaseHref(n) {
          const t = (function nR() {
            return (xa = xa || document.querySelector('base')), xa ? xa.getAttribute('href') : null;
          })();
          return null == t
            ? null
            : (function rR(e) {
                (_c = _c || document.createElement('a')), _c.setAttribute('href', e);
                const n = _c.pathname;
                return '/' === n.charAt(0) ? n : `/${n}`;
              })(t);
        }
        resetBaseElement() {
          xa = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(n) {
          return (function eF(e, n) {
            n = encodeURIComponent(n);
            for (const t of e.split(';')) {
              const r = t.indexOf('='),
                [o, i] = -1 == r ? [t, ''] : [t.slice(0, r), t.slice(r + 1)];
              if (o.trim() === n) return decodeURIComponent(i);
            }
            return null;
          })(document.cookie, n);
        }
      }
      let _c,
        xa = null;
      const RD = new Le('TRANSITION_ID'),
        iR = [
          {
            provide: Ca,
            useFactory: function oR(e, n, t) {
              return () => {
                t.get(rc).donePromise.then(() => {
                  const r = kr(),
                    o = n.querySelectorAll(`style[ng-transition="${e}"]`);
                  for (let i = 0; i < o.length; i++) r.remove(o[i]);
                });
              };
            },
            deps: [RD, cn, kt],
            multi: !0,
          },
        ];
      let aR = (() => {
        class e {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Dc = new Le('EventManagerPlugins');
      let Cc = (() => {
        class e {
          constructor(t, r) {
            (this._zone = r),
              (this._eventNameToPlugin = new Map()),
              t.forEach((o) => (o.manager = this)),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, r, o) {
            return this._findPluginFor(r).addEventListener(t, r, o);
          }
          addGlobalEventListener(t, r, o) {
            return this._findPluginFor(r).addGlobalEventListener(t, r, o);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const r = this._eventNameToPlugin.get(t);
            if (r) return r;
            const o = this._plugins;
            for (let i = 0; i < o.length; i++) {
              const s = o[i];
              if (s.supports(t)) return this._eventNameToPlugin.set(t, s), s;
            }
            throw new Error(`No event manager plugin found for event ${t}`);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Se(Dc), Se(J));
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class OD {
        constructor(n) {
          this._doc = n;
        }
        addGlobalEventListener(n, t, r) {
          const o = kr().getGlobalEventTarget(this._doc, n);
          if (!o) throw new Error(`Unsupported event target ${o} for event ${t}`);
          return this.addEventListener(o, t, r);
        }
      }
      let PD = (() => {
          class e {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(t) {
              const r = new Set();
              t.forEach((o) => {
                this._stylesSet.has(o) || (this._stylesSet.add(o), r.add(o));
              }),
                this.onStylesAdded(r);
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = Ge({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Fa = (() => {
          class e extends PD {
            constructor(t) {
              super(), (this._doc = t), (this._hostNodes = new Map()), this._hostNodes.set(t.head, []);
            }
            _addStylesToHost(t, r, o) {
              t.forEach((i) => {
                const s = this._doc.createElement('style');
                (s.textContent = i), o.push(r.appendChild(s));
              });
            }
            addHost(t) {
              const r = [];
              this._addStylesToHost(this._stylesSet, t, r), this._hostNodes.set(t, r);
            }
            removeHost(t) {
              const r = this._hostNodes.get(t);
              r && r.forEach(kD), this._hostNodes.delete(t);
            }
            onStylesAdded(t) {
              this._hostNodes.forEach((r, o) => {
                this._addStylesToHost(t, o, r);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((t) => t.forEach(kD));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Se(cn));
            }),
            (e.ɵprov = Ge({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      function kD(e) {
        kr().remove(e);
      }
      const ih = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/',
        },
        sh = /%COMP%/g;
      function bc(e, n, t) {
        for (let r = 0; r < n.length; r++) {
          let o = n[r];
          Array.isArray(o) ? bc(e, o, t) : ((o = o.replace(sh, e)), t.push(o));
        }
        return t;
      }
      function $D(e) {
        return (n) => {
          if ('__ngUnwrap__' === n) return e;
          !1 === e(n) && (n.preventDefault(), (n.returnValue = !1));
        };
      }
      let ah = (() => {
        class e {
          constructor(t, r, o) {
            (this.eventManager = t),
              (this.sharedStylesHost = r),
              (this.appId = o),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new lh(t));
          }
          createRenderer(t, r) {
            if (!t || !r) return this.defaultRenderer;
            switch (r.encapsulation) {
              case Ir.Emulated: {
                let o = this.rendererByCompId.get(r.id);
                return (
                  o ||
                    ((o = new hR(this.eventManager, this.sharedStylesHost, r, this.appId)),
                    this.rendererByCompId.set(r.id, o)),
                  o.applyToHost(t),
                  o
                );
              }
              case 1:
              case Ir.ShadowDom:
                return new pR(this.eventManager, this.sharedStylesHost, t, r);
              default:
                if (!this.rendererByCompId.has(r.id)) {
                  const o = bc(r.id, r.styles, []);
                  this.sharedStylesHost.addStyles(o), this.rendererByCompId.set(r.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Se(Cc), Se(Fa), Se(ba));
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class lh {
        constructor(n) {
          (this.eventManager = n), (this.data = Object.create(null)), (this.destroyNode = null);
        }
        destroy() {}
        createElement(n, t) {
          return t ? document.createElementNS(ih[t] || t, n) : document.createElement(n);
        }
        createComment(n) {
          return document.createComment(n);
        }
        createText(n) {
          return document.createTextNode(n);
        }
        appendChild(n, t) {
          (BD(n) ? n.content : n).appendChild(t);
        }
        insertBefore(n, t, r) {
          n && (BD(n) ? n.content : n).insertBefore(t, r);
        }
        removeChild(n, t) {
          n && n.removeChild(t);
        }
        selectRootElement(n, t) {
          let r = 'string' == typeof n ? document.querySelector(n) : n;
          if (!r) throw new Error(`The selector "${n}" did not match any elements`);
          return t || (r.textContent = ''), r;
        }
        parentNode(n) {
          return n.parentNode;
        }
        nextSibling(n) {
          return n.nextSibling;
        }
        setAttribute(n, t, r, o) {
          if (o) {
            t = o + ':' + t;
            const i = ih[o];
            i ? n.setAttributeNS(i, t, r) : n.setAttribute(t, r);
          } else n.setAttribute(t, r);
        }
        removeAttribute(n, t, r) {
          if (r) {
            const o = ih[r];
            o ? n.removeAttributeNS(o, t) : n.removeAttribute(`${r}:${t}`);
          } else n.removeAttribute(t);
        }
        addClass(n, t) {
          n.classList.add(t);
        }
        removeClass(n, t) {
          n.classList.remove(t);
        }
        setStyle(n, t, r, o) {
          o & (Tn.DashCase | Tn.Important)
            ? n.style.setProperty(t, r, o & Tn.Important ? 'important' : '')
            : (n.style[t] = r);
        }
        removeStyle(n, t, r) {
          r & Tn.DashCase ? n.style.removeProperty(t) : (n.style[t] = '');
        }
        setProperty(n, t, r) {
          n[t] = r;
        }
        setValue(n, t) {
          n.nodeValue = t;
        }
        listen(n, t, r) {
          return 'string' == typeof n
            ? this.eventManager.addGlobalEventListener(n, t, $D(r))
            : this.eventManager.addEventListener(n, t, $D(r));
        }
      }
      function BD(e) {
        return 'TEMPLATE' === e.tagName && void 0 !== e.content;
      }
      class hR extends lh {
        constructor(n, t, r, o) {
          super(n), (this.component = r);
          const i = bc(o + '-' + r.id, r.styles, []);
          t.addStyles(i),
            (this.contentAttr = (function uR(e) {
              return '_ngcontent-%COMP%'.replace(sh, e);
            })(o + '-' + r.id)),
            (this.hostAttr = (function dR(e) {
              return '_nghost-%COMP%'.replace(sh, e);
            })(o + '-' + r.id));
        }
        applyToHost(n) {
          super.setAttribute(n, this.hostAttr, '');
        }
        createElement(n, t) {
          const r = super.createElement(n, t);
          return super.setAttribute(r, this.contentAttr, ''), r;
        }
      }
      class pR extends lh {
        constructor(n, t, r, o) {
          super(n),
            (this.sharedStylesHost = t),
            (this.hostEl = r),
            (this.shadowRoot = r.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const i = bc(o.id, o.styles, []);
          for (let s = 0; s < i.length; s++) {
            const a = document.createElement('style');
            (a.textContent = i[s]), this.shadowRoot.appendChild(a);
          }
        }
        nodeOrShadowRoot(n) {
          return n === this.hostEl ? this.shadowRoot : n;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(n, t) {
          return super.appendChild(this.nodeOrShadowRoot(n), t);
        }
        insertBefore(n, t, r) {
          return super.insertBefore(this.nodeOrShadowRoot(n), t, r);
        }
        removeChild(n, t) {
          return super.removeChild(this.nodeOrShadowRoot(n), t);
        }
        parentNode(n) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)));
        }
      }
      let gR = (() => {
        class e extends OD {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, r, o) {
            return t.addEventListener(r, o, !1), () => this.removeEventListener(t, r, o);
          }
          removeEventListener(t, r, o) {
            return t.removeEventListener(r, o);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Se(cn));
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const jD = ['alt', 'control', 'meta', 'shift'],
        mR = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          'Del': 'Delete',
          'Esc': 'Escape',
          'Left': 'ArrowLeft',
          'Right': 'ArrowRight',
          'Up': 'ArrowUp',
          'Down': 'ArrowDown',
          'Menu': 'ContextMenu',
          'Scroll': 'ScrollLock',
          'Win': 'OS',
        },
        vR = { alt: (e) => e.altKey, control: (e) => e.ctrlKey, meta: (e) => e.metaKey, shift: (e) => e.shiftKey };
      let yR = (() => {
        class e extends OD {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return null != e.parseEventName(t);
          }
          addEventListener(t, r, o) {
            const i = e.parseEventName(r),
              s = e.eventCallback(i.fullKey, o, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(() => kr().onAndCancel(t, i.domEventName, s));
          }
          static parseEventName(t) {
            const r = t.toLowerCase().split('.'),
              o = r.shift();
            if (0 === r.length || ('keydown' !== o && 'keyup' !== o)) return null;
            const i = e._normalizeKey(r.pop());
            let s = '',
              a = r.indexOf('code');
            if (
              (a > -1 && (r.splice(a, 1), (s = 'code.')),
              jD.forEach((c) => {
                const u = r.indexOf(c);
                u > -1 && (r.splice(u, 1), (s += c + '.'));
              }),
              (s += i),
              0 != r.length || 0 === i.length)
            )
              return null;
            const l = {};
            return (l.domEventName = o), (l.fullKey = s), l;
          }
          static matchEventFullKeyCode(t, r) {
            let o = mR[t.key] || t.key,
              i = '';
            return (
              r.indexOf('code.') > -1 && ((o = t.code), (i = 'code.')),
              !(null == o || !o) &&
                ((o = o.toLowerCase()),
                ' ' === o ? (o = 'space') : '.' === o && (o = 'dot'),
                jD.forEach((s) => {
                  s !== o && (0, vR[s])(t) && (i += s + '.');
                }),
                (i += o),
                i === r)
            );
          }
          static eventCallback(t, r, o) {
            return (i) => {
              e.matchEventFullKeyCode(i, t) && o.runGuarded(() => r(i));
            };
          }
          static _normalizeKey(t) {
            return 'esc' === t ? 'escape' : t;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Se(cn));
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const bR = B_(ax, 'browser', [
          { provide: x_, useValue: 'browser' },
          {
            provide: T_,
            useValue: function _R() {
              oh.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: cn,
            useFactory: function CR() {
              return (
                (function rI(e) {
                  nd = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        zD = new Le(''),
        GD = [
          {
            provide: oc,
            useClass: class sR {
              addToWindow(n) {
                (wt.getAngularTestability = (r, o = !0) => {
                  const i = n.findTestabilityInTree(r, o);
                  if (null == i) throw new Error('Could not find testability for element.');
                  return i;
                }),
                  (wt.getAllAngularTestabilities = () => n.getAllTestabilities()),
                  (wt.getAllAngularRootElements = () => n.getAllRootElements()),
                  wt.frameworkStabilizers || (wt.frameworkStabilizers = []),
                  wt.frameworkStabilizers.push((r) => {
                    const o = wt.getAllAngularTestabilities();
                    let i = o.length,
                      s = !1;
                    const a = function (l) {
                      (s = s || l), i--, 0 == i && r(s);
                    };
                    o.forEach(function (l) {
                      l.whenStable(a);
                    });
                  });
              }
              findTestabilityInTree(n, t, r) {
                return null == t
                  ? null
                  : n.getTestability(t) ??
                      (r
                        ? kr().isShadowRoot(t)
                          ? this.findTestabilityInTree(n, t.host, !0)
                          : this.findTestabilityInTree(n, t.parentElement, !0)
                        : null);
              }
            },
            deps: [],
          },
          { provide: N_, useClass: xf, deps: [J, Ff, oc] },
          { provide: xf, useClass: xf, deps: [J, Ff, oc] },
        ],
        WD = [
          { provide: fd, useValue: 'root' },
          {
            provide: Gi,
            useFactory: function DR() {
              return new Gi();
            },
            deps: [],
          },
          { provide: Dc, useClass: gR, multi: !0, deps: [cn, J, x_] },
          { provide: Dc, useClass: yR, multi: !0, deps: [cn] },
          { provide: ah, useClass: ah, deps: [Cc, Fa, ba] },
          { provide: vm, useExisting: ah },
          { provide: PD, useExisting: Fa },
          { provide: Fa, useClass: Fa, deps: [cn] },
          { provide: Cc, useClass: Cc, deps: [Dc, J] },
          { provide: class LF {}, useClass: aR, deps: [] },
          [],
        ];
      let wR = (() => {
          class e {
            constructor(t) {}
            static withServerTransition(t) {
              return {
                ngModule: e,
                providers: [{ provide: ba, useValue: t.appId }, { provide: RD, useExisting: ba }, iR],
              };
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Se(zD, 12));
            }),
            (e.ɵmod = jr({ type: e })),
            (e.ɵinj = Er({ providers: [...WD, ...GD], imports: [SD, lx] })),
            e
          );
        })(),
        qD = (() => {
          class e {
            constructor(t) {
              this._doc = t;
            }
            getTitle() {
              return this._doc.title;
            }
            setTitle(t) {
              this._doc.title = t || '';
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Se(cn));
            }),
            (e.ɵprov = Ge({
              token: e,
              factory: function (t) {
                let r = null;
                return (
                  (r = t
                    ? new t()
                    : (function IR() {
                        return new qD(Se(cn));
                      })()),
                  r
                );
              },
              providedIn: 'root',
            })),
            e
          );
        })();
      typeof window < 'u' && window;
      const { isArray: OR } = Array,
        { getPrototypeOf: PR, prototype: kR, keys: NR } = Object;
      const { isArray: $R } = Array;
      class zn extends q {
        constructor(n) {
          super(), (this._value = n);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(n) {
          const t = super._subscribe(n);
          return !t.closed && n.next(this._value), t;
        }
        getValue() {
          const { hasError: n, thrownError: t, _value: r } = this;
          if (n) throw t;
          return this._throwIfClosed(), r;
        }
        next(n) {
          super.next((this._value = n));
        }
      }
      function $e(...e) {
        return bt(e, Vr(e));
      }
      const Rc = ze(
        (e) =>
          function () {
            e(this), (this.name = 'EmptyError'), (this.message = 'no elements in sequence');
          },
      );
      function ib(...e) {
        const n = Vr(e),
          t = (function Di(e) {
            return N(jo(e)) ? e.pop() : void 0;
          })(e),
          { args: r, keys: o } = (function ZD(e) {
            if (1 === e.length) {
              const n = e[0];
              if (OR(n)) return { args: n, keys: null };
              if (
                (function LR(e) {
                  return e && 'object' == typeof e && PR(e) === kR;
                })(n)
              ) {
                const t = NR(n);
                return { args: t.map((r) => n[r]), keys: t };
              }
            }
            return { args: e, keys: null };
          })(e);
        if (0 === r.length) return bt([], n);
        const i = new xe(
          (function qO(e, n, t = R) {
            return (r) => {
              sb(
                n,
                () => {
                  const { length: o } = e,
                    i = new Array(o);
                  let s = o,
                    a = o;
                  for (let l = 0; l < o; l++)
                    sb(
                      n,
                      () => {
                        const c = bt(e[l], n);
                        let u = !1;
                        c.subscribe(
                          ee(
                            r,
                            (d) => {
                              (i[l] = d), u || ((u = !0), a--), a || r.next(t(i.slice()));
                            },
                            () => {
                              --s || r.complete();
                            },
                          ),
                        );
                      },
                      r,
                    );
                },
                r,
              );
            };
          })(
            r,
            n,
            o
              ? (s) =>
                  (function XD(e, n) {
                    return e.reduce((t, r, o) => ((t[r] = n[o]), t), {});
                  })(o, s)
              : R,
          ),
        );
        return t
          ? i.pipe(
              (function dh(e) {
                return K((n) =>
                  (function VR(e, n) {
                    return $R(n) ? e(...n) : e(n);
                  })(e, n),
                );
              })(t),
            )
          : i;
      }
      function sb(e, n, t) {
        e ? Pn(t, e, n) : n();
      }
      function Oh(...e) {
        return (function KO() {
          return ar(1);
        })()(bt(e, Vr(e)));
      }
      function ab(e) {
        return new xe((n) => {
          $t(e()).subscribe(n);
        });
      }
      function Na(e, n) {
        const t = N(e) ? e : () => e,
          r = (o) => o.error(t());
        return new xe(n ? (o) => n.schedule(r, 0, o) : r);
      }
      function Ph() {
        return M((e, n) => {
          let t = null;
          e._refCount++;
          const r = ee(n, void 0, void 0, void 0, () => {
            if (!e || e._refCount <= 0 || 0 < --e._refCount) return void (t = null);
            const o = e._connection,
              i = t;
            (t = null), o && (!i || o === i) && o.unsubscribe(), n.unsubscribe();
          });
          e.subscribe(r), r.closed || (t = e.connect());
        });
      }
      class lb extends xe {
        constructor(n, t) {
          super(),
            (this.source = n),
            (this.subjectFactory = t),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            x(n) && (this.lift = n.lift);
        }
        _subscribe(n) {
          return this.getSubject().subscribe(n);
        }
        getSubject() {
          const n = this._subject;
          return (!n || n.isStopped) && (this._subject = this.subjectFactory()), this._subject;
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: n } = this;
          (this._subject = this._connection = null), n?.unsubscribe();
        }
        connect() {
          let n = this._connection;
          if (!n) {
            n = this._connection = new ke();
            const t = this.getSubject();
            n.add(
              this.source.subscribe(
                ee(
                  t,
                  void 0,
                  () => {
                    this._teardown(), t.complete();
                  },
                  (r) => {
                    this._teardown(), t.error(r);
                  },
                  () => this._teardown(),
                ),
              ),
            ),
              n.closed && ((this._connection = null), (n = ke.EMPTY));
          }
          return n;
        }
        refCount() {
          return Ph()(this);
        }
      }
      function nr(e, n) {
        return M((t, r) => {
          let o = null,
            i = 0,
            s = !1;
          const a = () => s && !o && r.complete();
          t.subscribe(
            ee(
              r,
              (l) => {
                o?.unsubscribe();
                let c = 0;
                const u = i++;
                $t(e(l, u)).subscribe(
                  (o = ee(
                    r,
                    (d) => r.next(n ? n(l, d, u, c++) : d),
                    () => {
                      (o = null), a();
                    },
                  )),
                );
              },
              () => {
                (s = !0), a();
              },
            ),
          );
        });
      }
      function La(e) {
        return e <= 0
          ? () => kn
          : M((n, t) => {
              let r = 0;
              n.subscribe(
                ee(t, (o) => {
                  ++r <= e && (t.next(o), e <= r && t.complete());
                }),
              );
            });
      }
      function Nr(e, n) {
        return M((t, r) => {
          let o = 0;
          t.subscribe(ee(r, (i) => e.call(n, i, o++) && r.next(i)));
        });
      }
      function Oc(e) {
        return M((n, t) => {
          let r = !1;
          n.subscribe(
            ee(
              t,
              (o) => {
                (r = !0), t.next(o);
              },
              () => {
                r || t.next(e), t.complete();
              },
            ),
          );
        });
      }
      function cb(e = ZO) {
        return M((n, t) => {
          let r = !1;
          n.subscribe(
            ee(
              t,
              (o) => {
                (r = !0), t.next(o);
              },
              () => (r ? t.complete() : t.error(e())),
            ),
          );
        });
      }
      function ZO() {
        return new Rc();
      }
      function To(e, n) {
        const t = arguments.length >= 2;
        return (r) => r.pipe(e ? Nr((o, i) => e(o, i, r)) : R, La(1), t ? Oc(n) : cb(() => new Rc()));
      }
      function si(e, n) {
        return N(n) ? Ot(e, n, 1) : Ot(e, 1);
      }
      function fn(e, n, t) {
        const r = N(e) || n || t ? { next: e, error: n, complete: t } : e;
        return r
          ? M((o, i) => {
              var s;
              null === (s = r.subscribe) || void 0 === s || s.call(r);
              let a = !0;
              o.subscribe(
                ee(
                  i,
                  (l) => {
                    var c;
                    null === (c = r.next) || void 0 === c || c.call(r, l), i.next(l);
                  },
                  () => {
                    var l;
                    (a = !1), null === (l = r.complete) || void 0 === l || l.call(r), i.complete();
                  },
                  (l) => {
                    var c;
                    (a = !1), null === (c = r.error) || void 0 === c || c.call(r, l), i.error(l);
                  },
                  () => {
                    var l, c;
                    a && (null === (l = r.unsubscribe) || void 0 === l || l.call(r)),
                      null === (c = r.finalize) || void 0 === c || c.call(r);
                  },
                ),
              );
            })
          : R;
      }
      function xo(e) {
        return M((n, t) => {
          let i,
            r = null,
            o = !1;
          (r = n.subscribe(
            ee(t, void 0, void 0, (s) => {
              (i = $t(e(s, xo(e)(n)))), r ? (r.unsubscribe(), (r = null), i.subscribe(t)) : (o = !0);
            }),
          )),
            o && (r.unsubscribe(), (r = null), i.subscribe(t));
        });
      }
      function XO(e, n, t, r, o) {
        return (i, s) => {
          let a = t,
            l = n,
            c = 0;
          i.subscribe(
            ee(
              s,
              (u) => {
                const d = c++;
                (l = a ? e(l, u, d) : ((a = !0), u)), r && s.next(l);
              },
              o &&
                (() => {
                  a && s.next(l), s.complete();
                }),
            ),
          );
        };
      }
      function ub(e, n) {
        return M(XO(e, n, arguments.length >= 2, !0));
      }
      function kh(e) {
        return e <= 0
          ? () => kn
          : M((n, t) => {
              let r = [];
              n.subscribe(
                ee(
                  t,
                  (o) => {
                    r.push(o), e < r.length && r.shift();
                  },
                  () => {
                    for (const o of r) t.next(o);
                    t.complete();
                  },
                  void 0,
                  () => {
                    r = null;
                  },
                ),
              );
            });
      }
      function db(e, n) {
        const t = arguments.length >= 2;
        return (r) => r.pipe(e ? Nr((o, i) => e(o, i, r)) : R, kh(1), t ? Oc(n) : cb(() => new Rc()));
      }
      function Nh(e) {
        return M((n, t) => {
          try {
            n.subscribe(t);
          } finally {
            t.add(e);
          }
        });
      }
      const nt = 'primary',
        $a = Symbol('RouteTitle');
      class eP {
        constructor(n) {
          this.params = n || {};
        }
        has(n) {
          return Object.prototype.hasOwnProperty.call(this.params, n);
        }
        get(n) {
          if (this.has(n)) {
            const t = this.params[n];
            return Array.isArray(t) ? t[0] : t;
          }
          return null;
        }
        getAll(n) {
          if (this.has(n)) {
            const t = this.params[n];
            return Array.isArray(t) ? t : [t];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function ds(e) {
        return new eP(e);
      }
      function tP(e, n, t) {
        const r = t.path.split('/');
        if (r.length > e.length || ('full' === t.pathMatch && (n.hasChildren() || r.length < e.length))) return null;
        const o = {};
        for (let i = 0; i < r.length; i++) {
          const s = r[i],
            a = e[i];
          if (s.startsWith(':')) o[s.substring(1)] = a;
          else if (s !== a.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: o };
      }
      function Lr(e, n) {
        const t = e ? Object.keys(e) : void 0,
          r = n ? Object.keys(n) : void 0;
        if (!t || !r || t.length != r.length) return !1;
        let o;
        for (let i = 0; i < t.length; i++) if (((o = t[i]), !fb(e[o], n[o]))) return !1;
        return !0;
      }
      function fb(e, n) {
        if (Array.isArray(e) && Array.isArray(n)) {
          if (e.length !== n.length) return !1;
          const t = [...e].sort(),
            r = [...n].sort();
          return t.every((o, i) => r[i] === o);
        }
        return e === n;
      }
      function hb(e) {
        return Array.prototype.concat.apply([], e);
      }
      function pb(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function tn(e, n) {
        for (const t in e) e.hasOwnProperty(t) && n(e[t], t);
      }
      function Fo(e) {
        return Xd(e) ? e : da(e) ? bt(Promise.resolve(e)) : $e(e);
      }
      const oP = {
          exact: function vb(e, n, t) {
            if (
              !li(e.segments, n.segments) ||
              !Pc(e.segments, n.segments, t) ||
              e.numberOfChildren !== n.numberOfChildren
            )
              return !1;
            for (const r in n.children) if (!e.children[r] || !vb(e.children[r], n.children[r], t)) return !1;
            return !0;
          },
          subset: yb,
        },
        gb = {
          exact: function iP(e, n) {
            return Lr(e, n);
          },
          subset: function sP(e, n) {
            return Object.keys(n).length <= Object.keys(e).length && Object.keys(n).every((t) => fb(e[t], n[t]));
          },
          ignored: () => !0,
        };
      function mb(e, n, t) {
        return (
          oP[t.paths](e.root, n.root, t.matrixParams) &&
          gb[t.queryParams](e.queryParams, n.queryParams) &&
          !('exact' === t.fragment && e.fragment !== n.fragment)
        );
      }
      function yb(e, n, t) {
        return _b(e, n, n.segments, t);
      }
      function _b(e, n, t, r) {
        if (e.segments.length > t.length) {
          const o = e.segments.slice(0, t.length);
          return !(!li(o, t) || n.hasChildren() || !Pc(o, t, r));
        }
        if (e.segments.length === t.length) {
          if (!li(e.segments, t) || !Pc(e.segments, t, r)) return !1;
          for (const o in n.children) if (!e.children[o] || !yb(e.children[o], n.children[o], r)) return !1;
          return !0;
        }
        {
          const o = t.slice(0, e.segments.length),
            i = t.slice(e.segments.length);
          return !!(li(e.segments, o) && Pc(e.segments, o, r) && e.children[nt]) && _b(e.children[nt], n, i, r);
        }
      }
      function Pc(e, n, t) {
        return n.every((r, o) => gb[t](e[o].parameters, r.parameters));
      }
      class ai {
        constructor(n, t, r) {
          (this.root = n), (this.queryParams = t), (this.fragment = r);
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = ds(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return cP.serialize(this);
        }
      }
      class rt {
        constructor(n, t) {
          (this.segments = n), (this.children = t), (this.parent = null), tn(t, (r, o) => (r.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return kc(this);
        }
      }
      class Va {
        constructor(n, t) {
          (this.path = n), (this.parameters = t);
        }
        get parameterMap() {
          return this._parameterMap || (this._parameterMap = ds(this.parameters)), this._parameterMap;
        }
        toString() {
          return bb(this);
        }
      }
      function li(e, n) {
        return e.length === n.length && e.every((t, r) => t.path === n[r].path);
      }
      let $h = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = Ge({
            token: e,
            factory: function () {
              return new Vh();
            },
            providedIn: 'root',
          })),
          e
        );
      })();
      class Vh {
        parse(n) {
          const t = new yP(n);
          return new ai(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment());
        }
        serialize(n) {
          const t = `/${Ba(n.root, !0)}`,
            r = (function fP(e) {
              const n = Object.keys(e)
                .map((t) => {
                  const r = e[t];
                  return Array.isArray(r) ? r.map((o) => `${Nc(t)}=${Nc(o)}`).join('&') : `${Nc(t)}=${Nc(r)}`;
                })
                .filter((t) => !!t);
              return n.length ? `?${n.join('&')}` : '';
            })(n.queryParams);
          return `${t}${r}${
            'string' == typeof n.fragment
              ? `#${(function uP(e) {
                  return encodeURI(e);
                })(n.fragment)}`
              : ''
          }`;
        }
      }
      const cP = new Vh();
      function kc(e) {
        return e.segments.map((n) => bb(n)).join('/');
      }
      function Ba(e, n) {
        if (!e.hasChildren()) return kc(e);
        if (n) {
          const t = e.children[nt] ? Ba(e.children[nt], !1) : '',
            r = [];
          return (
            tn(e.children, (o, i) => {
              i !== nt && r.push(`${i}:${Ba(o, !1)}`);
            }),
            r.length > 0 ? `${t}(${r.join('//')})` : t
          );
        }
        {
          const t = (function lP(e, n) {
            let t = [];
            return (
              tn(e.children, (r, o) => {
                o === nt && (t = t.concat(n(r, o)));
              }),
              tn(e.children, (r, o) => {
                o !== nt && (t = t.concat(n(r, o)));
              }),
              t
            );
          })(e, (r, o) => (o === nt ? [Ba(e.children[nt], !1)] : [`${o}:${Ba(r, !1)}`]));
          return 1 === Object.keys(e.children).length && null != e.children[nt]
            ? `${kc(e)}/${t[0]}`
            : `${kc(e)}/(${t.join('//')})`;
        }
      }
      function Db(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Nc(e) {
        return Db(e).replace(/%3B/gi, ';');
      }
      function Bh(e) {
        return Db(e).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
      }
      function Lc(e) {
        return decodeURIComponent(e);
      }
      function Cb(e) {
        return Lc(e.replace(/\+/g, '%20'));
      }
      function bb(e) {
        return `${Bh(e.path)}${(function dP(e) {
          return Object.keys(e)
            .map((n) => `;${Bh(n)}=${Bh(e[n])}`)
            .join('');
        })(e.parameters)}`;
      }
      const hP = /^[^\/()?;=#]+/;
      function $c(e) {
        const n = e.match(hP);
        return n ? n[0] : '';
      }
      const pP = /^[^=?&#]+/,
        mP = /^[^&#]+/;
      class yP {
        constructor(n) {
          (this.url = n), (this.remaining = n);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new rt([], {})
              : new rt([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const n = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(n);
            } while (this.consumeOptional('&'));
          return n;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const n = [];
          for (
            this.peekStartsWith('(') || n.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), n.push(this.parseSegment());
          let t = {};
          this.peekStartsWith('/(') && (this.capture('/'), (t = this.parseParens(!0)));
          let r = {};
          return (
            this.peekStartsWith('(') && (r = this.parseParens(!1)),
            (n.length > 0 || Object.keys(t).length > 0) && (r[nt] = new rt(n, t)),
            r
          );
        }
        parseSegment() {
          const n = $c(this.remaining);
          if ('' === n && this.peekStartsWith(';')) throw new _(4009, !1);
          return this.capture(n), new Va(Lc(n), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const n = {};
          for (; this.consumeOptional(';'); ) this.parseParam(n);
          return n;
        }
        parseParam(n) {
          const t = $c(this.remaining);
          if (!t) return;
          this.capture(t);
          let r = '';
          if (this.consumeOptional('=')) {
            const o = $c(this.remaining);
            o && ((r = o), this.capture(r));
          }
          n[Lc(t)] = Lc(r);
        }
        parseQueryParam(n) {
          const t = (function gP(e) {
            const n = e.match(pP);
            return n ? n[0] : '';
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let r = '';
          if (this.consumeOptional('=')) {
            const s = (function vP(e) {
              const n = e.match(mP);
              return n ? n[0] : '';
            })(this.remaining);
            s && ((r = s), this.capture(r));
          }
          const o = Cb(t),
            i = Cb(r);
          if (n.hasOwnProperty(o)) {
            let s = n[o];
            Array.isArray(s) || ((s = [s]), (n[o] = s)), s.push(i);
          } else n[o] = i;
        }
        parseParens(n) {
          const t = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const r = $c(this.remaining),
              o = this.remaining[r.length];
            if ('/' !== o && ')' !== o && ';' !== o) throw new _(4010, !1);
            let i;
            r.indexOf(':') > -1
              ? ((i = r.slice(0, r.indexOf(':'))), this.capture(i), this.capture(':'))
              : n && (i = nt);
            const s = this.parseChildren();
            (t[i] = 1 === Object.keys(s).length ? s[nt] : new rt([], s)), this.consumeOptional('//');
          }
          return t;
        }
        peekStartsWith(n) {
          return this.remaining.startsWith(n);
        }
        consumeOptional(n) {
          return !!this.peekStartsWith(n) && ((this.remaining = this.remaining.substring(n.length)), !0);
        }
        capture(n) {
          if (!this.consumeOptional(n)) throw new _(4011, !1);
        }
      }
      function jh(e) {
        return e.segments.length > 0 ? new rt([], { [nt]: e }) : e;
      }
      function Vc(e) {
        const n = {};
        for (const r of Object.keys(e.children)) {
          const i = Vc(e.children[r]);
          (i.segments.length > 0 || i.hasChildren()) && (n[r] = i);
        }
        return (function _P(e) {
          if (1 === e.numberOfChildren && e.children[nt]) {
            const n = e.children[nt];
            return new rt(e.segments.concat(n.segments), n.children);
          }
          return e;
        })(new rt(e.segments, n));
      }
      function ci(e) {
        return e instanceof ai;
      }
      function bP(e, n, t, r, o) {
        if (0 === t.length) return fs(n.root, n.root, n.root, r, o);
        const i = (function Ib(e) {
          if ('string' == typeof e[0] && 1 === e.length && '/' === e[0]) return new Eb(!0, 0, e);
          let n = 0,
            t = !1;
          const r = e.reduce((o, i, s) => {
            if ('object' == typeof i && null != i) {
              if (i.outlets) {
                const a = {};
                return (
                  tn(i.outlets, (l, c) => {
                    a[c] = 'string' == typeof l ? l.split('/') : l;
                  }),
                  [...o, { outlets: a }]
                );
              }
              if (i.segmentPath) return [...o, i.segmentPath];
            }
            return 'string' != typeof i
              ? [...o, i]
              : 0 === s
              ? (i.split('/').forEach((a, l) => {
                  (0 == l && '.' === a) || (0 == l && '' === a ? (t = !0) : '..' === a ? n++ : '' != a && o.push(a));
                }),
                o)
              : [...o, i];
          }, []);
          return new Eb(t, n, r);
        })(t);
        return i.toRoot()
          ? fs(n.root, n.root, new rt([], {}), r, o)
          : (function s(l) {
              const c = (function EP(e, n, t, r) {
                  if (e.isAbsolute) return new hs(n.root, !0, 0);
                  if (-1 === r) return new hs(t, t === n.root, 0);
                  return (function Sb(e, n, t) {
                    let r = e,
                      o = n,
                      i = t;
                    for (; i > o; ) {
                      if (((i -= o), (r = r.parent), !r)) throw new _(4005, !1);
                      o = r.segments.length;
                    }
                    return new hs(r, !1, o - i);
                  })(t, r + (ja(e.commands[0]) ? 0 : 1), e.numberOfDoubleDots);
                })(i, n, e.snapshot?._urlSegment, l),
                u = c.processChildren
                  ? Ua(c.segmentGroup, c.index, i.commands)
                  : Uh(c.segmentGroup, c.index, i.commands);
              return fs(n.root, c.segmentGroup, u, r, o);
            })(e.snapshot?._lastPathIndex);
      }
      function ja(e) {
        return 'object' == typeof e && null != e && !e.outlets && !e.segmentPath;
      }
      function Ha(e) {
        return 'object' == typeof e && null != e && e.outlets;
      }
      function fs(e, n, t, r, o) {
        let s,
          i = {};
        r &&
          tn(r, (l, c) => {
            i[c] = Array.isArray(l) ? l.map((u) => `${u}`) : `${l}`;
          }),
          (s = e === n ? t : wb(e, n, t));
        const a = jh(Vc(s));
        return new ai(a, i, o);
      }
      function wb(e, n, t) {
        const r = {};
        return (
          tn(e.children, (o, i) => {
            r[i] = o === n ? t : wb(o, n, t);
          }),
          new rt(e.segments, r)
        );
      }
      class Eb {
        constructor(n, t, r) {
          if (
            ((this.isAbsolute = n), (this.numberOfDoubleDots = t), (this.commands = r), n && r.length > 0 && ja(r[0]))
          )
            throw new _(4003, !1);
          const o = r.find(Ha);
          if (o && o !== pb(r)) throw new _(4004, !1);
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class hs {
        constructor(n, t, r) {
          (this.segmentGroup = n), (this.processChildren = t), (this.index = r);
        }
      }
      function Uh(e, n, t) {
        if ((e || (e = new rt([], {})), 0 === e.segments.length && e.hasChildren())) return Ua(e, n, t);
        const r = (function SP(e, n, t) {
            let r = 0,
              o = n;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; o < e.segments.length; ) {
              if (r >= t.length) return i;
              const s = e.segments[o],
                a = t[r];
              if (Ha(a)) break;
              const l = `${a}`,
                c = r < t.length - 1 ? t[r + 1] : null;
              if (o > 0 && void 0 === l) break;
              if (l && c && 'object' == typeof c && void 0 === c.outlets) {
                if (!Ab(l, c, s)) return i;
                r += 2;
              } else {
                if (!Ab(l, {}, s)) return i;
                r++;
              }
              o++;
            }
            return { match: !0, pathIndex: o, commandIndex: r };
          })(e, n, t),
          o = t.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          const i = new rt(e.segments.slice(0, r.pathIndex), {});
          return (i.children[nt] = new rt(e.segments.slice(r.pathIndex), e.children)), Ua(i, 0, o);
        }
        return r.match && 0 === o.length
          ? new rt(e.segments, {})
          : r.match && !e.hasChildren()
          ? zh(e, n, t)
          : r.match
          ? Ua(e, 0, o)
          : zh(e, n, t);
      }
      function Ua(e, n, t) {
        if (0 === t.length) return new rt(e.segments, {});
        {
          const r = (function IP(e) {
              return Ha(e[0]) ? e[0].outlets : { [nt]: e };
            })(t),
            o = {};
          return (
            tn(r, (i, s) => {
              'string' == typeof i && (i = [i]), null !== i && (o[s] = Uh(e.children[s], n, i));
            }),
            tn(e.children, (i, s) => {
              void 0 === r[s] && (o[s] = i);
            }),
            new rt(e.segments, o)
          );
        }
      }
      function zh(e, n, t) {
        const r = e.segments.slice(0, n);
        let o = 0;
        for (; o < t.length; ) {
          const i = t[o];
          if (Ha(i)) {
            const l = MP(i.outlets);
            return new rt(r, l);
          }
          if (0 === o && ja(t[0])) {
            r.push(new Va(e.segments[n].path, Mb(t[0]))), o++;
            continue;
          }
          const s = Ha(i) ? i.outlets[nt] : `${i}`,
            a = o < t.length - 1 ? t[o + 1] : null;
          s && a && ja(a) ? (r.push(new Va(s, Mb(a))), (o += 2)) : (r.push(new Va(s, {})), o++);
        }
        return new rt(r, {});
      }
      function MP(e) {
        const n = {};
        return (
          tn(e, (t, r) => {
            'string' == typeof t && (t = [t]), null !== t && (n[r] = zh(new rt([], {}), 0, t));
          }),
          n
        );
      }
      function Mb(e) {
        const n = {};
        return tn(e, (t, r) => (n[r] = `${t}`)), n;
      }
      function Ab(e, n, t) {
        return e == t.path && Lr(n, t.parameters);
      }
      class so {
        constructor(n, t) {
          (this.id = n), (this.url = t);
        }
      }
      class Bc extends so {
        constructor(n, t, r = 'imperative', o = null) {
          super(n, t), (this.type = 0), (this.navigationTrigger = r), (this.restoredState = o);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class ui extends so {
        constructor(n, t, r) {
          super(n, t), (this.urlAfterRedirects = r), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class jc extends so {
        constructor(n, t, r, o) {
          super(n, t), (this.reason = r), (this.code = o), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Tb extends so {
        constructor(n, t, r, o) {
          super(n, t), (this.error = r), (this.target = o), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class AP extends so {
        constructor(n, t, r, o) {
          super(n, t), (this.urlAfterRedirects = r), (this.state = o), (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class TP extends so {
        constructor(n, t, r, o) {
          super(n, t), (this.urlAfterRedirects = r), (this.state = o), (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class xP extends so {
        constructor(n, t, r, o, i) {
          super(n, t), (this.urlAfterRedirects = r), (this.state = o), (this.shouldActivate = i), (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class FP extends so {
        constructor(n, t, r, o) {
          super(n, t), (this.urlAfterRedirects = r), (this.state = o), (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class RP extends so {
        constructor(n, t, r, o) {
          super(n, t), (this.urlAfterRedirects = r), (this.state = o), (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class OP {
        constructor(n) {
          (this.route = n), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class PP {
        constructor(n) {
          (this.route = n), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class kP {
        constructor(n) {
          (this.snapshot = n), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class NP {
        constructor(n) {
          (this.snapshot = n), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class LP {
        constructor(n) {
          (this.snapshot = n), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class $P {
        constructor(n) {
          (this.snapshot = n), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class xb {
        constructor(n, t, r) {
          (this.routerEvent = n), (this.position = t), (this.anchor = r), (this.type = 15);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class Fb {
        constructor(n) {
          this._root = n;
        }
        get root() {
          return this._root.value;
        }
        parent(n) {
          const t = this.pathFromRoot(n);
          return t.length > 1 ? t[t.length - 2] : null;
        }
        children(n) {
          const t = Gh(n, this._root);
          return t ? t.children.map((r) => r.value) : [];
        }
        firstChild(n) {
          const t = Gh(n, this._root);
          return t && t.children.length > 0 ? t.children[0].value : null;
        }
        siblings(n) {
          const t = Wh(n, this._root);
          return t.length < 2 ? [] : t[t.length - 2].children.map((o) => o.value).filter((o) => o !== n);
        }
        pathFromRoot(n) {
          return Wh(n, this._root).map((t) => t.value);
        }
      }
      function Gh(e, n) {
        if (e === n.value) return n;
        for (const t of n.children) {
          const r = Gh(e, t);
          if (r) return r;
        }
        return null;
      }
      function Wh(e, n) {
        if (e === n.value) return [n];
        for (const t of n.children) {
          const r = Wh(e, t);
          if (r.length) return r.unshift(n), r;
        }
        return [];
      }
      class ao {
        constructor(n, t) {
          (this.value = n), (this.children = t);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function ps(e) {
        const n = {};
        return e && e.children.forEach((t) => (n[t.value.outlet] = t)), n;
      }
      class Rb extends Fb {
        constructor(n, t) {
          super(n), (this.snapshot = t), qh(this, n);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Ob(e, n) {
        const t = (function BP(e, n) {
            const s = new Hc([], {}, {}, '', {}, nt, n, null, e.root, -1, {});
            return new kb('', new ao(s, []));
          })(e, n),
          r = new zn([new Va('', {})]),
          o = new zn({}),
          i = new zn({}),
          s = new zn({}),
          a = new zn(''),
          l = new $r(r, o, s, a, i, nt, n, t.root);
        return (l.snapshot = t.root), new Rb(new ao(l, []), t);
      }
      class $r {
        constructor(n, t, r, o, i, s, a, l) {
          (this.url = n),
            (this.params = t),
            (this.queryParams = r),
            (this.fragment = o),
            (this.data = i),
            (this.outlet = s),
            (this.component = a),
            (this.title = this.data?.pipe(K((c) => c[$a])) ?? $e(void 0)),
            (this._futureSnapshot = l);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = this.params.pipe(K((n) => ds(n)))), this._paramMap;
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(K((n) => ds(n)))), this._queryParamMap
          );
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function Pb(e, n = 'emptyOnly') {
        const t = e.pathFromRoot;
        let r = 0;
        if ('always' !== n)
          for (r = t.length - 1; r >= 1; ) {
            const o = t[r],
              i = t[r - 1];
            if (o.routeConfig && '' === o.routeConfig.path) r--;
            else {
              if (i.component) break;
              r--;
            }
          }
        return (function jP(e) {
          return e.reduce(
            (n, t) => ({
              params: { ...n.params, ...t.params },
              data: { ...n.data, ...t.data },
              resolve: { ...t.data, ...n.resolve, ...t.routeConfig?.data, ...t._resolvedData },
            }),
            { params: {}, data: {}, resolve: {} },
          );
        })(t.slice(r));
      }
      class Hc {
        constructor(n, t, r, o, i, s, a, l, c, u, d, g) {
          (this.url = n),
            (this.params = t),
            (this.queryParams = r),
            (this.fragment = o),
            (this.data = i),
            (this.outlet = s),
            (this.component = a),
            (this.title = this.data?.[$a]),
            (this.routeConfig = l),
            (this._urlSegment = c),
            (this._lastPathIndex = u),
            (this._correctedLastPathIndex = g ?? u),
            (this._resolve = d);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = ds(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = ds(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return `Route(url:'${this.url.map((r) => r.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class kb extends Fb {
        constructor(n, t) {
          super(t), (this.url = n), qh(this, t);
        }
        toString() {
          return Nb(this._root);
        }
      }
      function qh(e, n) {
        (n.value._routerState = e), n.children.forEach((t) => qh(e, t));
      }
      function Nb(e) {
        const n = e.children.length > 0 ? ` { ${e.children.map(Nb).join(', ')} } ` : '';
        return `${e.value}${n}`;
      }
      function Kh(e) {
        if (e.snapshot) {
          const n = e.snapshot,
            t = e._futureSnapshot;
          (e.snapshot = t),
            Lr(n.queryParams, t.queryParams) || e.queryParams.next(t.queryParams),
            n.fragment !== t.fragment && e.fragment.next(t.fragment),
            Lr(n.params, t.params) || e.params.next(t.params),
            (function nP(e, n) {
              if (e.length !== n.length) return !1;
              for (let t = 0; t < e.length; ++t) if (!Lr(e[t], n[t])) return !1;
              return !0;
            })(n.url, t.url) || e.url.next(t.url),
            Lr(n.data, t.data) || e.data.next(t.data);
        } else (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
      }
      function Yh(e, n) {
        const t =
          Lr(e.params, n.params) &&
          (function aP(e, n) {
            return li(e, n) && e.every((t, r) => Lr(t.parameters, n[r].parameters));
          })(e.url, n.url);
        return t && !(!e.parent != !n.parent) && (!e.parent || Yh(e.parent, n.parent));
      }
      function za(e, n, t) {
        if (t && e.shouldReuseRoute(n.value, t.value.snapshot)) {
          const r = t.value;
          r._futureSnapshot = n.value;
          const o = (function UP(e, n, t) {
            return n.children.map((r) => {
              for (const o of t.children) if (e.shouldReuseRoute(r.value, o.value.snapshot)) return za(e, r, o);
              return za(e, r);
            });
          })(e, n, t);
          return new ao(r, o);
        }
        {
          if (e.shouldAttach(n.value)) {
            const i = e.retrieve(n.value);
            if (null !== i) {
              const s = i.route;
              return (s.value._futureSnapshot = n.value), (s.children = n.children.map((a) => za(e, a))), s;
            }
          }
          const r = (function zP(e) {
              return new $r(
                new zn(e.url),
                new zn(e.params),
                new zn(e.queryParams),
                new zn(e.fragment),
                new zn(e.data),
                e.outlet,
                e.component,
                e,
              );
            })(n.value),
            o = n.children.map((i) => za(e, i));
          return new ao(r, o);
        }
      }
      const Zh = 'ngNavigationCancelingError';
      function Lb(e, n) {
        const { redirectTo: t, navigationBehaviorOptions: r } = ci(n)
            ? { redirectTo: n, navigationBehaviorOptions: void 0 }
            : n,
          o = $b(!1, 0, n);
        return (o.url = t), (o.navigationBehaviorOptions = r), o;
      }
      function $b(e, n, t) {
        const r = new Error('NavigationCancelingError: ' + (e || ''));
        return (r[Zh] = !0), (r.cancellationCode = n), t && (r.url = t), r;
      }
      function Vb(e) {
        return Bb(e) && ci(e.url);
      }
      function Bb(e) {
        return e && e[Zh];
      }
      class GP {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new di()),
            (this.attachRef = null);
        }
      }
      let di = (() => {
        class e {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(t, r) {
            const o = this.getOrCreateContext(t);
            (o.outlet = r), this.contexts.set(t, o);
          }
          onChildOutletDestroyed(t) {
            const r = this.getContext(t);
            r && ((r.outlet = null), (r.attachRef = null));
          }
          onOutletDeactivated() {
            const t = this.contexts;
            return (this.contexts = new Map()), t;
          }
          onOutletReAttached(t) {
            this.contexts = t;
          }
          getOrCreateContext(t) {
            let r = this.getContext(t);
            return r || ((r = new GP()), this.contexts.set(t, r)), r;
          }
          getContext(t) {
            return this.contexts.get(t) || null;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const Uc = !1;
      let jb = (() => {
        class e {
          constructor(t, r, o, i, s) {
            (this.parentContexts = t),
              (this.location = r),
              (this.changeDetector = i),
              (this.environmentInjector = s),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new Dt()),
              (this.deactivateEvents = new Dt()),
              (this.attachEvents = new Dt()),
              (this.detachEvents = new Dt()),
              (this.name = o || nt),
              t.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.getContext(this.name)?.outlet === this &&
              this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const t = this.parentContexts.getContext(this.name);
              t &&
                t.route &&
                (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.injector));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new _(4012, Uc);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new _(4012, Uc);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
          }
          detach() {
            if (!this.activated) throw new _(4012, Uc);
            this.location.detach();
            const t = this.activated;
            return (this.activated = null), (this._activatedRoute = null), this.detachEvents.emit(t.instance), t;
          }
          attach(t, r) {
            (this.activated = t),
              (this._activatedRoute = r),
              this.location.insert(t.hostView),
              this.attachEvents.emit(t.instance);
          }
          deactivate() {
            if (this.activated) {
              const t = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(t);
            }
          }
          activateWith(t, r) {
            if (this.isActivated) throw new _(4013, Uc);
            this._activatedRoute = t;
            const o = this.location,
              s = t._futureSnapshot.component,
              a = this.parentContexts.getOrCreateContext(this.name).children,
              l = new WP(t, a, o.injector);
            if (
              r &&
              (function qP(e) {
                return !!e.resolveComponentFactory;
              })(r)
            ) {
              const c = r.resolveComponentFactory(s);
              this.activated = o.createComponent(c, o.length, l);
            } else
              this.activated = o.createComponent(s, {
                index: o.length,
                injector: l,
                environmentInjector: r ?? this.environmentInjector,
              });
            this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              h(di),
              h(Fn),
              (function Yo(e) {
                return (function H0(e, n) {
                  if ('class' === n) return e.classes;
                  if ('style' === n) return e.styles;
                  const t = e.attrs;
                  if (t) {
                    const r = t.length;
                    let o = 0;
                    for (; o < r; ) {
                      const i = t[o];
                      if (Kp(i)) break;
                      if (0 === i) o += 2;
                      else if ('number' == typeof i) for (o++; o < r && 'string' == typeof t[o]; ) o++;
                      else {
                        if (i === n) return t[o + 1];
                        o += 2;
                      }
                    }
                  }
                  return null;
                })(Kt(), e);
              })('name'),
              h(ce),
              h(Co),
            );
          }),
          (e.ɵdir = Fe({
            type: e,
            selectors: [['router-outlet']],
            outputs: {
              activateEvents: 'activate',
              deactivateEvents: 'deactivate',
              attachEvents: 'attach',
              detachEvents: 'detach',
            },
            exportAs: ['outlet'],
            standalone: !0,
          })),
          e
        );
      })();
      class WP {
        constructor(n, t, r) {
          (this.route = n), (this.childContexts = t), (this.parent = r);
        }
        get(n, t) {
          return n === $r ? this.route : n === di ? this.childContexts : this.parent.get(n, t);
        }
      }
      let Xh = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = se({
            type: e,
            selectors: [['ng-component']],
            standalone: !0,
            features: [Uy],
            decls: 1,
            vars: 0,
            template: function (t, r) {
              1 & t && Pe(0, 'router-outlet');
            },
            dependencies: [jb],
            encapsulation: 2,
          })),
          e
        );
      })();
      function Hb(e, n) {
        return e.providers && !e._injector && (e._injector = Jl(e.providers, n, `Route: ${e.path}`)), e._injector ?? n;
      }
      function Jh(e) {
        const n = e.children && e.children.map(Jh),
          t = n ? { ...e, children: n } : { ...e };
        return (
          !t.component &&
            !t.loadComponent &&
            (n || t.loadChildren) &&
            t.outlet &&
            t.outlet !== nt &&
            (t.component = Xh),
          t
        );
      }
      function rr(e) {
        return e.outlet || nt;
      }
      function Ub(e, n) {
        const t = e.filter((r) => rr(r) === n);
        return t.push(...e.filter((r) => rr(r) !== n)), t;
      }
      function Ga(e) {
        if (!e) return null;
        if (e.routeConfig?._injector) return e.routeConfig._injector;
        for (let n = e.parent; n; n = n.parent) {
          const t = n.routeConfig;
          if (t?._loadedInjector) return t._loadedInjector;
          if (t?._injector) return t._injector;
        }
        return null;
      }
      class QP {
        constructor(n, t, r, o) {
          (this.routeReuseStrategy = n), (this.futureState = t), (this.currState = r), (this.forwardEvent = o);
        }
        activate(n) {
          const t = this.futureState._root,
            r = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, r, n), Kh(this.futureState.root), this.activateChildRoutes(t, r, n);
        }
        deactivateChildRoutes(n, t, r) {
          const o = ps(t);
          n.children.forEach((i) => {
            const s = i.value.outlet;
            this.deactivateRoutes(i, o[s], r), delete o[s];
          }),
            tn(o, (i, s) => {
              this.deactivateRouteAndItsChildren(i, r);
            });
        }
        deactivateRoutes(n, t, r) {
          const o = n.value,
            i = t ? t.value : null;
          if (o === i)
            if (o.component) {
              const s = r.getContext(o.outlet);
              s && this.deactivateChildRoutes(n, t, s.children);
            } else this.deactivateChildRoutes(n, t, r);
          else i && this.deactivateRouteAndItsChildren(t, r);
        }
        deactivateRouteAndItsChildren(n, t) {
          n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot)
            ? this.detachAndStoreRouteSubtree(n, t)
            : this.deactivateRouteAndOutlet(n, t);
        }
        detachAndStoreRouteSubtree(n, t) {
          const r = t.getContext(n.value.outlet),
            o = r && n.value.component ? r.children : t,
            i = ps(n);
          for (const s of Object.keys(i)) this.deactivateRouteAndItsChildren(i[s], o);
          if (r && r.outlet) {
            const s = r.outlet.detach(),
              a = r.children.onOutletDeactivated();
            this.routeReuseStrategy.store(n.value.snapshot, { componentRef: s, route: n, contexts: a });
          }
        }
        deactivateRouteAndOutlet(n, t) {
          const r = t.getContext(n.value.outlet),
            o = r && n.value.component ? r.children : t,
            i = ps(n);
          for (const s of Object.keys(i)) this.deactivateRouteAndItsChildren(i[s], o);
          r &&
            r.outlet &&
            (r.outlet.deactivate(),
            r.children.onOutletDeactivated(),
            (r.attachRef = null),
            (r.resolver = null),
            (r.route = null));
        }
        activateChildRoutes(n, t, r) {
          const o = ps(t);
          n.children.forEach((i) => {
            this.activateRoutes(i, o[i.value.outlet], r), this.forwardEvent(new $P(i.value.snapshot));
          }),
            n.children.length && this.forwardEvent(new NP(n.value.snapshot));
        }
        activateRoutes(n, t, r) {
          const o = n.value,
            i = t ? t.value : null;
          if ((Kh(o), o === i))
            if (o.component) {
              const s = r.getOrCreateContext(o.outlet);
              this.activateChildRoutes(n, t, s.children);
            } else this.activateChildRoutes(n, t, r);
          else if (o.component) {
            const s = r.getOrCreateContext(o.outlet);
            if (this.routeReuseStrategy.shouldAttach(o.snapshot)) {
              const a = this.routeReuseStrategy.retrieve(o.snapshot);
              this.routeReuseStrategy.store(o.snapshot, null),
                s.children.onOutletReAttached(a.contexts),
                (s.attachRef = a.componentRef),
                (s.route = a.route.value),
                s.outlet && s.outlet.attach(a.componentRef, a.route.value),
                Kh(a.route.value),
                this.activateChildRoutes(n, null, s.children);
            } else {
              const a = Ga(o.snapshot),
                l = a?.get(Wr) ?? null;
              (s.attachRef = null),
                (s.route = o),
                (s.resolver = l),
                (s.injector = a),
                s.outlet && s.outlet.activateWith(o, s.injector),
                this.activateChildRoutes(n, null, s.children);
            }
          } else this.activateChildRoutes(n, null, r);
        }
      }
      class zb {
        constructor(n) {
          (this.path = n), (this.route = this.path[this.path.length - 1]);
        }
      }
      class zc {
        constructor(n, t) {
          (this.component = n), (this.route = t);
        }
      }
      function JP(e, n, t) {
        const r = e._root;
        return Wa(r, n ? n._root : null, t, [r.value]);
      }
      function gs(e, n) {
        const t = Symbol(),
          r = n.get(e, t);
        return r === t
          ? 'function' != typeof e ||
            (function Hw(e) {
              return null !== el(e);
            })(e)
            ? n.get(e)
            : e
          : r;
      }
      function Wa(e, n, t, r, o = { canDeactivateChecks: [], canActivateChecks: [] }) {
        const i = ps(n);
        return (
          e.children.forEach((s) => {
            (function tk(e, n, t, r, o = { canDeactivateChecks: [], canActivateChecks: [] }) {
              const i = e.value,
                s = n ? n.value : null,
                a = t ? t.getContext(e.value.outlet) : null;
              if (s && i.routeConfig === s.routeConfig) {
                const l = (function nk(e, n, t) {
                  if ('function' == typeof t) return t(e, n);
                  switch (t) {
                    case 'pathParamsChange':
                      return !li(e.url, n.url);
                    case 'pathParamsOrQueryParamsChange':
                      return !li(e.url, n.url) || !Lr(e.queryParams, n.queryParams);
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !Yh(e, n) || !Lr(e.queryParams, n.queryParams);
                    default:
                      return !Yh(e, n);
                  }
                })(s, i, i.routeConfig.runGuardsAndResolvers);
                l ? o.canActivateChecks.push(new zb(r)) : ((i.data = s.data), (i._resolvedData = s._resolvedData)),
                  Wa(e, n, i.component ? (a ? a.children : null) : t, r, o),
                  l &&
                    a &&
                    a.outlet &&
                    a.outlet.isActivated &&
                    o.canDeactivateChecks.push(new zc(a.outlet.component, s));
              } else
                s && qa(n, a, o),
                  o.canActivateChecks.push(new zb(r)),
                  Wa(e, null, i.component ? (a ? a.children : null) : t, r, o);
            })(s, i[s.value.outlet], t, r.concat([s.value]), o),
              delete i[s.value.outlet];
          }),
          tn(i, (s, a) => qa(s, t.getContext(a), o)),
          o
        );
      }
      function qa(e, n, t) {
        const r = ps(e),
          o = e.value;
        tn(r, (i, s) => {
          qa(i, o.component ? (n ? n.children.getContext(s) : null) : n, t);
        }),
          t.canDeactivateChecks.push(
            new zc(o.component && n && n.outlet && n.outlet.isActivated ? n.outlet.component : null, o),
          );
      }
      function Ka(e) {
        return 'function' == typeof e;
      }
      function ep(e) {
        return e instanceof Rc || 'EmptyError' === e?.name;
      }
      const Gc = Symbol('INITIAL_VALUE');
      function ms() {
        return nr((e) =>
          ib(
            e.map((n) =>
              n.pipe(
                La(1),
                (function YO(...e) {
                  const n = Vr(e);
                  return M((t, r) => {
                    (n ? Oh(e, t, n) : Oh(e, t)).subscribe(r);
                  });
                })(Gc),
              ),
            ),
          ).pipe(
            K((n) => {
              for (const t of n)
                if (!0 !== t) {
                  if (t === Gc) return Gc;
                  if (!1 === t || t instanceof ai) return t;
                }
              return !0;
            }),
            Nr((n) => n !== Gc),
            La(1),
          ),
        );
      }
      function Gb(e) {
        return (function Z(...e) {
          return Te(e);
        })(
          fn((n) => {
            if (ci(n)) throw Lb(0, n);
          }),
          K((n) => !0 === n),
        );
      }
      const tp = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function Wb(e, n, t, r, o) {
        const i = np(e, n, t);
        return i.matched
          ? (function _k(e, n, t, r) {
              const o = n.canMatch;
              return o && 0 !== o.length
                ? $e(
                    o.map((s) => {
                      const a = gs(s, e);
                      return Fo(
                        (function lk(e) {
                          return e && Ka(e.canMatch);
                        })(a)
                          ? a.canMatch(n, t)
                          : e.runInContext(() => a(n, t)),
                      );
                    }),
                  ).pipe(ms(), Gb())
                : $e(!0);
            })((r = Hb(n, r)), n, t).pipe(K((s) => (!0 === s ? i : { ...tp })))
          : $e(i);
      }
      function np(e, n, t) {
        if ('' === n.path)
          return 'full' === n.pathMatch && (e.hasChildren() || t.length > 0)
            ? { ...tp }
            : { matched: !0, consumedSegments: [], remainingSegments: t, parameters: {}, positionalParamSegments: {} };
        const o = (n.matcher || tP)(t, e, n);
        if (!o) return { ...tp };
        const i = {};
        tn(o.posParams, (a, l) => {
          i[l] = a.path;
        });
        const s = o.consumed.length > 0 ? { ...i, ...o.consumed[o.consumed.length - 1].parameters } : i;
        return {
          matched: !0,
          consumedSegments: o.consumed,
          remainingSegments: t.slice(o.consumed.length),
          parameters: s,
          positionalParamSegments: o.posParams ?? {},
        };
      }
      function Wc(e, n, t, r, o = 'corrected') {
        if (
          t.length > 0 &&
          (function bk(e, n, t) {
            return t.some((r) => qc(e, n, r) && rr(r) !== nt);
          })(e, t, r)
        ) {
          const s = new rt(
            n,
            (function Ck(e, n, t, r) {
              const o = {};
              (o[nt] = r), (r._sourceSegment = e), (r._segmentIndexShift = n.length);
              for (const i of t)
                if ('' === i.path && rr(i) !== nt) {
                  const s = new rt([], {});
                  (s._sourceSegment = e), (s._segmentIndexShift = n.length), (o[rr(i)] = s);
                }
              return o;
            })(e, n, r, new rt(t, e.children)),
          );
          return (s._sourceSegment = e), (s._segmentIndexShift = n.length), { segmentGroup: s, slicedSegments: [] };
        }
        if (
          0 === t.length &&
          (function wk(e, n, t) {
            return t.some((r) => qc(e, n, r));
          })(e, t, r)
        ) {
          const s = new rt(
            e.segments,
            (function Dk(e, n, t, r, o, i) {
              const s = {};
              for (const a of r)
                if (qc(e, t, a) && !o[rr(a)]) {
                  const l = new rt([], {});
                  (l._sourceSegment = e),
                    (l._segmentIndexShift = 'legacy' === i ? e.segments.length : n.length),
                    (s[rr(a)] = l);
                }
              return { ...o, ...s };
            })(e, n, t, r, e.children, o),
          );
          return (s._sourceSegment = e), (s._segmentIndexShift = n.length), { segmentGroup: s, slicedSegments: t };
        }
        const i = new rt(e.segments, e.children);
        return (i._sourceSegment = e), (i._segmentIndexShift = n.length), { segmentGroup: i, slicedSegments: t };
      }
      function qc(e, n, t) {
        return (!(e.hasChildren() || n.length > 0) || 'full' !== t.pathMatch) && '' === t.path;
      }
      function qb(e, n, t, r) {
        return !!(rr(e) === r || (r !== nt && qc(n, t, e))) && ('**' === e.path || np(n, e, t).matched);
      }
      function Kb(e, n, t) {
        return 0 === n.length && !e.children[t];
      }
      const Kc = !1;
      class Yc {
        constructor(n) {
          this.segmentGroup = n || null;
        }
      }
      class Yb {
        constructor(n) {
          this.urlTree = n;
        }
      }
      function Ya(e) {
        return Na(new Yc(e));
      }
      function Zb(e) {
        return Na(new Yb(e));
      }
      class Mk {
        constructor(n, t, r, o, i) {
          (this.injector = n),
            (this.configLoader = t),
            (this.urlSerializer = r),
            (this.urlTree = o),
            (this.config = i),
            (this.allowRedirects = !0);
        }
        apply() {
          const n = Wc(this.urlTree.root, [], [], this.config).segmentGroup,
            t = new rt(n.segments, n.children);
          return this.expandSegmentGroup(this.injector, this.config, t, nt)
            .pipe(K((i) => this.createUrlTree(Vc(i), this.urlTree.queryParams, this.urlTree.fragment)))
            .pipe(
              xo((i) => {
                if (i instanceof Yb) return (this.allowRedirects = !1), this.match(i.urlTree);
                throw i instanceof Yc ? this.noMatchError(i) : i;
              }),
            );
        }
        match(n) {
          return this.expandSegmentGroup(this.injector, this.config, n.root, nt)
            .pipe(K((o) => this.createUrlTree(Vc(o), n.queryParams, n.fragment)))
            .pipe(
              xo((o) => {
                throw o instanceof Yc ? this.noMatchError(o) : o;
              }),
            );
        }
        noMatchError(n) {
          return new _(4002, Kc);
        }
        createUrlTree(n, t, r) {
          const o = jh(n);
          return new ai(o, t, r);
        }
        expandSegmentGroup(n, t, r, o) {
          return 0 === r.segments.length && r.hasChildren()
            ? this.expandChildren(n, t, r).pipe(K((i) => new rt([], i)))
            : this.expandSegment(n, r, t, r.segments, o, !0);
        }
        expandChildren(n, t, r) {
          const o = [];
          for (const i of Object.keys(r.children)) 'primary' === i ? o.unshift(i) : o.push(i);
          return bt(o).pipe(
            si((i) => {
              const s = r.children[i],
                a = Ub(t, i);
              return this.expandSegmentGroup(n, a, s, i).pipe(K((l) => ({ segment: l, outlet: i })));
            }),
            ub((i, s) => ((i[s.outlet] = s.segment), i), {}),
            db(),
          );
        }
        expandSegment(n, t, r, o, i, s) {
          return bt(r).pipe(
            si((a) =>
              this.expandSegmentAgainstRoute(n, t, r, a, o, i, s).pipe(
                xo((c) => {
                  if (c instanceof Yc) return $e(null);
                  throw c;
                }),
              ),
            ),
            To((a) => !!a),
            xo((a, l) => {
              if (ep(a)) return Kb(t, o, i) ? $e(new rt([], {})) : Ya(t);
              throw a;
            }),
          );
        }
        expandSegmentAgainstRoute(n, t, r, o, i, s, a) {
          return qb(o, t, i, s)
            ? void 0 === o.redirectTo
              ? this.matchSegmentAgainstRoute(n, t, o, i, s)
              : a && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(n, t, r, o, i, s)
              : Ya(t)
            : Ya(t);
        }
        expandSegmentAgainstRouteUsingRedirect(n, t, r, o, i, s) {
          return '**' === o.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(n, r, o, s)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(n, t, r, o, i, s);
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(n, t, r, o) {
          const i = this.applyRedirectCommands([], r.redirectTo, {});
          return r.redirectTo.startsWith('/')
            ? Zb(i)
            : this.lineralizeSegments(r, i).pipe(
                Ot((s) => {
                  const a = new rt(s, {});
                  return this.expandSegment(n, a, t, s, o, !1);
                }),
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(n, t, r, o, i, s) {
          const { matched: a, consumedSegments: l, remainingSegments: c, positionalParamSegments: u } = np(t, o, i);
          if (!a) return Ya(t);
          const d = this.applyRedirectCommands(l, o.redirectTo, u);
          return o.redirectTo.startsWith('/')
            ? Zb(d)
            : this.lineralizeSegments(o, d).pipe(Ot((g) => this.expandSegment(n, t, r, g.concat(c), s, !1)));
        }
        matchSegmentAgainstRoute(n, t, r, o, i) {
          return '**' === r.path
            ? ((n = Hb(r, n)),
              r.loadChildren
                ? (r._loadedRoutes
                    ? $e({ routes: r._loadedRoutes, injector: r._loadedInjector })
                    : this.configLoader.loadChildren(n, r)
                  ).pipe(K((a) => ((r._loadedRoutes = a.routes), (r._loadedInjector = a.injector), new rt(o, {}))))
                : $e(new rt(o, {})))
            : Wb(t, r, o, n).pipe(
                nr(({ matched: s, consumedSegments: a, remainingSegments: l }) =>
                  s
                    ? this.getChildConfig((n = r._injector ?? n), r, o).pipe(
                        Ot((u) => {
                          const d = u.injector ?? n,
                            g = u.routes,
                            { segmentGroup: y, slicedSegments: w } = Wc(t, a, l, g),
                            F = new rt(y.segments, y.children);
                          if (0 === w.length && F.hasChildren())
                            return this.expandChildren(d, g, F).pipe(K((B) => new rt(a, B)));
                          if (0 === g.length && 0 === w.length) return $e(new rt(a, {}));
                          const V = rr(r) === i;
                          return this.expandSegment(d, F, g, w, V ? nt : i, !0).pipe(
                            K((ye) => new rt(a.concat(ye.segments), ye.children)),
                          );
                        }),
                      )
                    : Ya(t),
                ),
              );
        }
        getChildConfig(n, t, r) {
          return t.children
            ? $e({ routes: t.children, injector: n })
            : t.loadChildren
            ? void 0 !== t._loadedRoutes
              ? $e({ routes: t._loadedRoutes, injector: t._loadedInjector })
              : (function yk(e, n, t, r) {
                  const o = n.canLoad;
                  return void 0 === o || 0 === o.length
                    ? $e(!0)
                    : $e(
                        o.map((s) => {
                          const a = gs(s, e);
                          return Fo(
                            (function ok(e) {
                              return e && Ka(e.canLoad);
                            })(a)
                              ? a.canLoad(n, t)
                              : e.runInContext(() => a(n, t)),
                          );
                        }),
                      ).pipe(ms(), Gb());
                })(n, t, r).pipe(
                  Ot((o) =>
                    o
                      ? this.configLoader.loadChildren(n, t).pipe(
                          fn((i) => {
                            (t._loadedRoutes = i.routes), (t._loadedInjector = i.injector);
                          }),
                        )
                      : (function Ik(e) {
                          return Na($b(Kc, 3));
                        })(),
                  ),
                )
            : $e({ routes: [], injector: n });
        }
        lineralizeSegments(n, t) {
          let r = [],
            o = t.root;
          for (;;) {
            if (((r = r.concat(o.segments)), 0 === o.numberOfChildren)) return $e(r);
            if (o.numberOfChildren > 1 || !o.children[nt]) return Na(new _(4e3, Kc));
            o = o.children[nt];
          }
        }
        applyRedirectCommands(n, t, r) {
          return this.applyRedirectCreateUrlTree(t, this.urlSerializer.parse(t), n, r);
        }
        applyRedirectCreateUrlTree(n, t, r, o) {
          const i = this.createSegmentGroup(n, t.root, r, o);
          return new ai(i, this.createQueryParams(t.queryParams, this.urlTree.queryParams), t.fragment);
        }
        createQueryParams(n, t) {
          const r = {};
          return (
            tn(n, (o, i) => {
              if ('string' == typeof o && o.startsWith(':')) {
                const a = o.substring(1);
                r[i] = t[a];
              } else r[i] = o;
            }),
            r
          );
        }
        createSegmentGroup(n, t, r, o) {
          const i = this.createSegments(n, t.segments, r, o);
          let s = {};
          return (
            tn(t.children, (a, l) => {
              s[l] = this.createSegmentGroup(n, a, r, o);
            }),
            new rt(i, s)
          );
        }
        createSegments(n, t, r, o) {
          return t.map((i) => (i.path.startsWith(':') ? this.findPosParam(n, i, o) : this.findOrReturn(i, r)));
        }
        findPosParam(n, t, r) {
          const o = r[t.path.substring(1)];
          if (!o) throw new _(4001, Kc);
          return o;
        }
        findOrReturn(n, t) {
          let r = 0;
          for (const o of t) {
            if (o.path === n.path) return t.splice(r), o;
            r++;
          }
          return n;
        }
      }
      class Tk {}
      class Rk {
        constructor(n, t, r, o, i, s, a, l) {
          (this.injector = n),
            (this.rootComponentType = t),
            (this.config = r),
            (this.urlTree = o),
            (this.url = i),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = a),
            (this.urlSerializer = l);
        }
        recognize() {
          const n = Wc(
            this.urlTree.root,
            [],
            [],
            this.config.filter((t) => void 0 === t.redirectTo),
            this.relativeLinkResolution,
          ).segmentGroup;
          return this.processSegmentGroup(this.injector, this.config, n, nt).pipe(
            K((t) => {
              if (null === t) return null;
              const r = new Hc(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  nt,
                  this.rootComponentType,
                  null,
                  this.urlTree.root,
                  -1,
                  {},
                ),
                o = new ao(r, t),
                i = new kb(this.url, o);
              return this.inheritParamsAndData(i._root), i;
            }),
          );
        }
        inheritParamsAndData(n) {
          const t = n.value,
            r = Pb(t, this.paramsInheritanceStrategy);
          (t.params = Object.freeze(r.params)),
            (t.data = Object.freeze(r.data)),
            n.children.forEach((o) => this.inheritParamsAndData(o));
        }
        processSegmentGroup(n, t, r, o) {
          return 0 === r.segments.length && r.hasChildren()
            ? this.processChildren(n, t, r)
            : this.processSegment(n, t, r, r.segments, o);
        }
        processChildren(n, t, r) {
          return bt(Object.keys(r.children)).pipe(
            si((o) => {
              const i = r.children[o],
                s = Ub(t, o);
              return this.processSegmentGroup(n, s, i, o);
            }),
            ub((o, i) => (o && i ? (o.push(...i), o) : null)),
            (function QO(e, n = !1) {
              return M((t, r) => {
                let o = 0;
                t.subscribe(
                  ee(r, (i) => {
                    const s = e(i, o++);
                    (s || n) && r.next(i), !s && r.complete();
                  }),
                );
              });
            })((o) => null !== o),
            Oc(null),
            db(),
            K((o) => {
              if (null === o) return null;
              const i = Xb(o);
              return (
                (function Ok(e) {
                  e.sort((n, t) =>
                    n.value.outlet === nt
                      ? -1
                      : t.value.outlet === nt
                      ? 1
                      : n.value.outlet.localeCompare(t.value.outlet),
                  );
                })(i),
                i
              );
            }),
          );
        }
        processSegment(n, t, r, o, i) {
          return bt(t).pipe(
            si((s) => this.processSegmentAgainstRoute(s._injector ?? n, s, r, o, i)),
            To((s) => !!s),
            xo((s) => {
              if (ep(s)) return Kb(r, o, i) ? $e([]) : $e(null);
              throw s;
            }),
          );
        }
        processSegmentAgainstRoute(n, t, r, o, i) {
          if (t.redirectTo || !qb(t, r, o, i)) return $e(null);
          let s;
          if ('**' === t.path) {
            const a = o.length > 0 ? pb(o).parameters : {},
              l = Jb(r) + o.length;
            s = $e({
              snapshot: new Hc(
                o,
                a,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                tw(t),
                rr(t),
                t.component ?? t._loadedComponent ?? null,
                t,
                Qb(r),
                l,
                nw(t),
                l,
              ),
              consumedSegments: [],
              remainingSegments: [],
            });
          } else
            s = Wb(r, t, o, n).pipe(
              K(({ matched: a, consumedSegments: l, remainingSegments: c, parameters: u }) => {
                if (!a) return null;
                const d = Jb(r) + l.length;
                return {
                  snapshot: new Hc(
                    l,
                    u,
                    Object.freeze({ ...this.urlTree.queryParams }),
                    this.urlTree.fragment,
                    tw(t),
                    rr(t),
                    t.component ?? t._loadedComponent ?? null,
                    t,
                    Qb(r),
                    d,
                    nw(t),
                    d,
                  ),
                  consumedSegments: l,
                  remainingSegments: c,
                };
              }),
            );
          return s.pipe(
            nr((a) => {
              if (null === a) return $e(null);
              const { snapshot: l, consumedSegments: c, remainingSegments: u } = a;
              n = t._injector ?? n;
              const d = t._loadedInjector ?? n,
                g = (function Pk(e) {
                  return e.children ? e.children : e.loadChildren ? e._loadedRoutes : [];
                })(t),
                { segmentGroup: y, slicedSegments: w } = Wc(
                  r,
                  c,
                  u,
                  g.filter((V) => void 0 === V.redirectTo),
                  this.relativeLinkResolution,
                );
              if (0 === w.length && y.hasChildren())
                return this.processChildren(d, g, y).pipe(K((V) => (null === V ? null : [new ao(l, V)])));
              if (0 === g.length && 0 === w.length) return $e([new ao(l, [])]);
              const F = rr(t) === i;
              return this.processSegment(d, g, y, w, F ? nt : i).pipe(K((V) => (null === V ? null : [new ao(l, V)])));
            }),
          );
        }
      }
      function kk(e) {
        const n = e.value.routeConfig;
        return n && '' === n.path && void 0 === n.redirectTo;
      }
      function Xb(e) {
        const n = [],
          t = new Set();
        for (const r of e) {
          if (!kk(r)) {
            n.push(r);
            continue;
          }
          const o = n.find((i) => r.value.routeConfig === i.value.routeConfig);
          void 0 !== o ? (o.children.push(...r.children), t.add(o)) : n.push(r);
        }
        for (const r of t) {
          const o = Xb(r.children);
          n.push(new ao(r.value, o));
        }
        return n.filter((r) => !t.has(r));
      }
      function Qb(e) {
        let n = e;
        for (; n._sourceSegment; ) n = n._sourceSegment;
        return n;
      }
      function Jb(e) {
        let n = e,
          t = n._segmentIndexShift ?? 0;
        for (; n._sourceSegment; ) (n = n._sourceSegment), (t += n._segmentIndexShift ?? 0);
        return t - 1;
      }
      function tw(e) {
        return e.data || {};
      }
      function nw(e) {
        return e.resolve || {};
      }
      function rw(e) {
        return 'string' == typeof e.title || null === e.title;
      }
      function rp(e) {
        return nr((n) => {
          const t = e(n);
          return t ? bt(t).pipe(K(() => n)) : $e(n);
        });
      }
      let ow = (() => {
          class e {
            buildTitle(t) {
              let r,
                o = t.root;
              for (; void 0 !== o; )
                (r = this.getResolvedTitleForRoute(o) ?? r), (o = o.children.find((i) => i.outlet === nt));
              return r;
            }
            getResolvedTitleForRoute(t) {
              return t.data[$a];
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = Ge({
              token: e,
              factory: function () {
                return Vt(iw);
              },
              providedIn: 'root',
            })),
            e
          );
        })(),
        iw = (() => {
          class e extends ow {
            constructor(t) {
              super(), (this.title = t);
            }
            updateTitle(t) {
              const r = this.buildTitle(t);
              void 0 !== r && this.title.setTitle(r);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Se(qD));
            }),
            (e.ɵprov = Ge({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })();
      class Uk {}
      class Gk extends class zk {
        shouldDetach(n) {
          return !1;
        }
        store(n, t) {}
        shouldAttach(n) {
          return !1;
        }
        retrieve(n) {
          return null;
        }
        shouldReuseRoute(n, t) {
          return n.routeConfig === t.routeConfig;
        }
      } {}
      const Xc = new Le('', { providedIn: 'root', factory: () => ({}) }),
        op = new Le('ROUTES');
      let ip = (() => {
        class e {
          constructor(t, r) {
            (this.injector = t),
              (this.compiler = r),
              (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap());
          }
          loadComponent(t) {
            if (this.componentLoaders.get(t)) return this.componentLoaders.get(t);
            if (t._loadedComponent) return $e(t._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(t);
            const r = Fo(t.loadComponent()).pipe(
                fn((i) => {
                  this.onLoadEndListener && this.onLoadEndListener(t), (t._loadedComponent = i);
                }),
                Nh(() => {
                  this.componentLoaders.delete(t);
                }),
              ),
              o = new lb(r, () => new q()).pipe(Ph());
            return this.componentLoaders.set(t, o), o;
          }
          loadChildren(t, r) {
            if (this.childrenLoaders.get(r)) return this.childrenLoaders.get(r);
            if (r._loadedRoutes) return $e({ routes: r._loadedRoutes, injector: r._loadedInjector });
            this.onLoadStartListener && this.onLoadStartListener(r);
            const i = this.loadModuleFactoryOrRoutes(r.loadChildren).pipe(
                K((a) => {
                  this.onLoadEndListener && this.onLoadEndListener(r);
                  let l,
                    c,
                    u = !1;
                  Array.isArray(a)
                    ? (c = a)
                    : ((l = a.create(t).injector), (c = hb(l.get(op, [], Be.Self | Be.Optional))));
                  return { routes: c.map(Jh), injector: l };
                }),
                Nh(() => {
                  this.childrenLoaders.delete(r);
                }),
              ),
              s = new lb(i, () => new q()).pipe(Ph());
            return this.childrenLoaders.set(r, s), s;
          }
          loadModuleFactoryOrRoutes(t) {
            return Fo(t()).pipe(
              Ot((r) => (r instanceof jy || Array.isArray(r) ? $e(r) : bt(this.compiler.compileModuleAsync(r)))),
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Se(kt), Se(Sf));
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      class qk {}
      class Kk {
        shouldProcessUrl(n) {
          return !0;
        }
        extract(n) {
          return n;
        }
        merge(n, t) {
          return n;
        }
      }
      function Yk(e) {
        throw e;
      }
      function Zk(e, n, t) {
        return n.parse('/');
      }
      const Xk = { paths: 'exact', fragment: 'ignored', matrixParams: 'ignored', queryParams: 'exact' },
        Qk = { paths: 'subset', fragment: 'ignored', matrixParams: 'ignored', queryParams: 'subset' };
      function aw() {
        const e = Vt($h),
          n = Vt(di),
          t = Vt(Sa),
          r = Vt(kt),
          o = Vt(Sf),
          i = Vt(op, { optional: !0 }) ?? [],
          s = Vt(Xc, { optional: !0 }) ?? {},
          a = Vt(iw),
          l = Vt(ow, { optional: !0 }),
          c = Vt(qk, { optional: !0 }),
          u = Vt(Uk, { optional: !0 }),
          d = new jt(null, e, n, t, r, o, hb(i));
        return (
          c && (d.urlHandlingStrategy = c),
          u && (d.routeReuseStrategy = u),
          (d.titleStrategy = l ?? a),
          (function Jk(e, n) {
            e.errorHandler && (n.errorHandler = e.errorHandler),
              e.malformedUriErrorHandler && (n.malformedUriErrorHandler = e.malformedUriErrorHandler),
              e.onSameUrlNavigation && (n.onSameUrlNavigation = e.onSameUrlNavigation),
              e.paramsInheritanceStrategy && (n.paramsInheritanceStrategy = e.paramsInheritanceStrategy),
              e.relativeLinkResolution && (n.relativeLinkResolution = e.relativeLinkResolution),
              e.urlUpdateStrategy && (n.urlUpdateStrategy = e.urlUpdateStrategy),
              e.canceledNavigationResolution && (n.canceledNavigationResolution = e.canceledNavigationResolution);
          })(s, d),
          d
        );
      }
      let jt = (() => {
        class e {
          constructor(t, r, o, i, s, a, l) {
            (this.rootComponentType = t),
              (this.urlSerializer = r),
              (this.rootContexts = o),
              (this.location = i),
              (this.config = l),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.disposed = !1),
              (this.navigationId = 0),
              (this.currentPageId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new q()),
              (this.errorHandler = Yk),
              (this.malformedUriErrorHandler = Zk),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.afterPreactivation = () => $e(void 0)),
              (this.urlHandlingStrategy = new Kk()),
              (this.routeReuseStrategy = new Gk()),
              (this.onSameUrlNavigation = 'ignore'),
              (this.paramsInheritanceStrategy = 'emptyOnly'),
              (this.urlUpdateStrategy = 'deferred'),
              (this.relativeLinkResolution = 'corrected'),
              (this.canceledNavigationResolution = 'replace'),
              (this.configLoader = s.get(ip)),
              (this.configLoader.onLoadEndListener = (g) => this.triggerEvent(new PP(g))),
              (this.configLoader.onLoadStartListener = (g) => this.triggerEvent(new OP(g))),
              (this.ngModule = s.get(ni)),
              (this.console = s.get(MT));
            const d = s.get(J);
            (this.isNgZoneEnabled = d instanceof J && J.isInAngularZone()),
              this.resetConfig(l),
              (this.currentUrlTree = (function rP() {
                return new ai(new rt([], {}), {}, null);
              })()),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.routerState = Ob(this.currentUrlTree, this.rootComponentType)),
              (this.transitions = new zn({
                id: 0,
                targetPageId: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: 'imperative',
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          get browserPageId() {
            return this.location.getState()?.ɵrouterPageId;
          }
          setupNavigations(t) {
            const r = this.events;
            return t.pipe(
              Nr((o) => 0 !== o.id),
              K((o) => ({ ...o, extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl) })),
              nr((o) => {
                let i = !1,
                  s = !1;
                return $e(o).pipe(
                  fn((a) => {
                    this.currentNavigation = {
                      id: a.id,
                      initialUrl: a.rawUrl,
                      extractedUrl: a.extractedUrl,
                      trigger: a.source,
                      extras: a.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? { ...this.lastSuccessfulNavigation, previousNavigation: null }
                        : null,
                    };
                  }),
                  nr((a) => {
                    const l = this.browserUrlTree.toString(),
                      c = !this.navigated || a.extractedUrl.toString() !== l || l !== this.currentUrlTree.toString();
                    if (
                      ('reload' === this.onSameUrlNavigation || c) &&
                      this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl)
                    )
                      return (
                        lw(a.source) && (this.browserUrlTree = a.extractedUrl),
                        $e(a).pipe(
                          nr((d) => {
                            const g = this.transitions.getValue();
                            return (
                              r.next(new Bc(d.id, this.serializeUrl(d.extractedUrl), d.source, d.restoredState)),
                              g !== this.transitions.getValue() ? kn : Promise.resolve(d)
                            );
                          }),
                          (function Ak(e, n, t, r) {
                            return nr((o) =>
                              (function Sk(e, n, t, r, o) {
                                return new Mk(e, n, t, r, o).apply();
                              })(e, n, t, o.extractedUrl, r).pipe(K((i) => ({ ...o, urlAfterRedirects: i }))),
                            );
                          })(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config),
                          fn((d) => {
                            (this.currentNavigation = { ...this.currentNavigation, finalUrl: d.urlAfterRedirects }),
                              (o.urlAfterRedirects = d.urlAfterRedirects);
                          }),
                          (function Lk(e, n, t, r, o, i) {
                            return Ot((s) =>
                              (function Fk(e, n, t, r, o, i, s = 'emptyOnly', a = 'legacy') {
                                return new Rk(e, n, t, r, o, s, a, i).recognize().pipe(
                                  nr((l) =>
                                    null === l
                                      ? (function xk(e) {
                                          return new xe((n) => n.error(e));
                                        })(new Tk())
                                      : $e(l),
                                  ),
                                );
                              })(e, n, t, s.urlAfterRedirects, r.serialize(s.urlAfterRedirects), r, o, i).pipe(
                                K((a) => ({ ...s, targetSnapshot: a })),
                              ),
                            );
                          })(
                            this.ngModule.injector,
                            this.rootComponentType,
                            this.config,
                            this.urlSerializer,
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution,
                          ),
                          fn((d) => {
                            if (((o.targetSnapshot = d.targetSnapshot), 'eager' === this.urlUpdateStrategy)) {
                              if (!d.extras.skipLocationChange) {
                                const y = this.urlHandlingStrategy.merge(d.urlAfterRedirects, d.rawUrl);
                                this.setBrowserUrl(y, d);
                              }
                              this.browserUrlTree = d.urlAfterRedirects;
                            }
                            const g = new AP(
                              d.id,
                              this.serializeUrl(d.extractedUrl),
                              this.serializeUrl(d.urlAfterRedirects),
                              d.targetSnapshot,
                            );
                            r.next(g);
                          }),
                        )
                      );
                    if (c && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                      const { id: g, extractedUrl: y, source: w, restoredState: F, extras: V } = a,
                        ie = new Bc(g, this.serializeUrl(y), w, F);
                      r.next(ie);
                      const ye = Ob(y, this.rootComponentType).snapshot;
                      return $e(
                        (o = {
                          ...a,
                          targetSnapshot: ye,
                          urlAfterRedirects: y,
                          extras: { ...V, skipLocationChange: !1, replaceUrl: !1 },
                        }),
                      );
                    }
                    return (this.rawUrlTree = a.rawUrl), a.resolve(null), kn;
                  }),
                  fn((a) => {
                    const l = new TP(
                      a.id,
                      this.serializeUrl(a.extractedUrl),
                      this.serializeUrl(a.urlAfterRedirects),
                      a.targetSnapshot,
                    );
                    this.triggerEvent(l);
                  }),
                  K((a) => (o = { ...a, guards: JP(a.targetSnapshot, a.currentSnapshot, this.rootContexts) })),
                  (function uk(e, n) {
                    return Ot((t) => {
                      const {
                        targetSnapshot: r,
                        currentSnapshot: o,
                        guards: { canActivateChecks: i, canDeactivateChecks: s },
                      } = t;
                      return 0 === s.length && 0 === i.length
                        ? $e({ ...t, guardsResult: !0 })
                        : (function dk(e, n, t, r) {
                            return bt(e).pipe(
                              Ot((o) =>
                                (function vk(e, n, t, r, o) {
                                  const i = n && n.routeConfig ? n.routeConfig.canDeactivate : null;
                                  return i && 0 !== i.length
                                    ? $e(
                                        i.map((a) => {
                                          const l = Ga(n) ?? o,
                                            c = gs(a, l);
                                          return Fo(
                                            (function ak(e) {
                                              return e && Ka(e.canDeactivate);
                                            })(c)
                                              ? c.canDeactivate(e, n, t, r)
                                              : l.runInContext(() => c(e, n, t, r)),
                                          ).pipe(To());
                                        }),
                                      ).pipe(ms())
                                    : $e(!0);
                                })(o.component, o.route, t, n, r),
                              ),
                              To((o) => !0 !== o, !0),
                            );
                          })(s, r, o, e).pipe(
                            Ot((a) =>
                              a &&
                              (function rk(e) {
                                return 'boolean' == typeof e;
                              })(a)
                                ? (function fk(e, n, t, r) {
                                    return bt(n).pipe(
                                      si((o) =>
                                        Oh(
                                          (function pk(e, n) {
                                            return null !== e && n && n(new kP(e)), $e(!0);
                                          })(o.route.parent, r),
                                          (function hk(e, n) {
                                            return null !== e && n && n(new LP(e)), $e(!0);
                                          })(o.route, r),
                                          (function mk(e, n, t) {
                                            const r = n[n.length - 1],
                                              i = n
                                                .slice(0, n.length - 1)
                                                .reverse()
                                                .map((s) =>
                                                  (function ek(e) {
                                                    const n = e.routeConfig ? e.routeConfig.canActivateChild : null;
                                                    return n && 0 !== n.length ? { node: e, guards: n } : null;
                                                  })(s),
                                                )
                                                .filter((s) => null !== s)
                                                .map((s) =>
                                                  ab(() =>
                                                    $e(
                                                      s.guards.map((l) => {
                                                        const c = Ga(s.node) ?? t,
                                                          u = gs(l, c);
                                                        return Fo(
                                                          (function sk(e) {
                                                            return e && Ka(e.canActivateChild);
                                                          })(u)
                                                            ? u.canActivateChild(r, e)
                                                            : c.runInContext(() => u(r, e)),
                                                        ).pipe(To());
                                                      }),
                                                    ).pipe(ms()),
                                                  ),
                                                );
                                            return $e(i).pipe(ms());
                                          })(e, o.path, t),
                                          (function gk(e, n, t) {
                                            const r = n.routeConfig ? n.routeConfig.canActivate : null;
                                            if (!r || 0 === r.length) return $e(!0);
                                            const o = r.map((i) =>
                                              ab(() => {
                                                const s = Ga(n) ?? t,
                                                  a = gs(i, s);
                                                return Fo(
                                                  (function ik(e) {
                                                    return e && Ka(e.canActivate);
                                                  })(a)
                                                    ? a.canActivate(n, e)
                                                    : s.runInContext(() => a(n, e)),
                                                ).pipe(To());
                                              }),
                                            );
                                            return $e(o).pipe(ms());
                                          })(e, o.route, t),
                                        ),
                                      ),
                                      To((o) => !0 !== o, !0),
                                    );
                                  })(r, i, e, n)
                                : $e(a),
                            ),
                            K((a) => ({ ...t, guardsResult: a })),
                          );
                    });
                  })(this.ngModule.injector, (a) => this.triggerEvent(a)),
                  fn((a) => {
                    if (((o.guardsResult = a.guardsResult), ci(a.guardsResult))) throw Lb(0, a.guardsResult);
                    const l = new xP(
                      a.id,
                      this.serializeUrl(a.extractedUrl),
                      this.serializeUrl(a.urlAfterRedirects),
                      a.targetSnapshot,
                      !!a.guardsResult,
                    );
                    this.triggerEvent(l);
                  }),
                  Nr(
                    (a) => !!a.guardsResult || (this.restoreHistory(a), this.cancelNavigationTransition(a, '', 3), !1),
                  ),
                  rp((a) => {
                    if (a.guards.canActivateChecks.length)
                      return $e(a).pipe(
                        fn((l) => {
                          const c = new FP(
                            l.id,
                            this.serializeUrl(l.extractedUrl),
                            this.serializeUrl(l.urlAfterRedirects),
                            l.targetSnapshot,
                          );
                          this.triggerEvent(c);
                        }),
                        nr((l) => {
                          let c = !1;
                          return $e(l).pipe(
                            (function $k(e, n) {
                              return Ot((t) => {
                                const {
                                  targetSnapshot: r,
                                  guards: { canActivateChecks: o },
                                } = t;
                                if (!o.length) return $e(t);
                                let i = 0;
                                return bt(o).pipe(
                                  si((s) =>
                                    (function Vk(e, n, t, r) {
                                      const o = e.routeConfig,
                                        i = e._resolve;
                                      return (
                                        void 0 !== o?.title && !rw(o) && (i[$a] = o.title),
                                        (function Bk(e, n, t, r) {
                                          const o = (function jk(e) {
                                            return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)];
                                          })(e);
                                          if (0 === o.length) return $e({});
                                          const i = {};
                                          return bt(o).pipe(
                                            Ot((s) =>
                                              (function Hk(e, n, t, r) {
                                                const o = Ga(n) ?? r,
                                                  i = gs(e, o);
                                                return Fo(i.resolve ? i.resolve(n, t) : o.runInContext(() => i(n, t)));
                                              })(e[s], n, t, r).pipe(
                                                To(),
                                                fn((a) => {
                                                  i[s] = a;
                                                }),
                                              ),
                                            ),
                                            kh(1),
                                            (function JO(e) {
                                              return K(() => e);
                                            })(i),
                                            xo((s) => (ep(s) ? kn : Na(s))),
                                          );
                                        })(i, e, n, r).pipe(
                                          K(
                                            (s) => (
                                              (e._resolvedData = s),
                                              (e.data = Pb(e, t).resolve),
                                              o && rw(o) && (e.data[$a] = o.title),
                                              null
                                            ),
                                          ),
                                        )
                                      );
                                    })(s.route, r, e, n),
                                  ),
                                  fn(() => i++),
                                  kh(1),
                                  Ot((s) => (i === o.length ? $e(t) : kn)),
                                );
                              });
                            })(this.paramsInheritanceStrategy, this.ngModule.injector),
                            fn({
                              next: () => (c = !0),
                              complete: () => {
                                c || (this.restoreHistory(l), this.cancelNavigationTransition(l, '', 2));
                              },
                            }),
                          );
                        }),
                        fn((l) => {
                          const c = new RP(
                            l.id,
                            this.serializeUrl(l.extractedUrl),
                            this.serializeUrl(l.urlAfterRedirects),
                            l.targetSnapshot,
                          );
                          this.triggerEvent(c);
                        }),
                      );
                  }),
                  rp((a) => {
                    const l = (c) => {
                      const u = [];
                      c.routeConfig?.loadComponent &&
                        !c.routeConfig._loadedComponent &&
                        u.push(
                          this.configLoader.loadComponent(c.routeConfig).pipe(
                            fn((d) => {
                              c.component = d;
                            }),
                            K(() => {}),
                          ),
                        );
                      for (const d of c.children) u.push(...l(d));
                      return u;
                    };
                    return ib(l(a.targetSnapshot.root)).pipe(Oc(), La(1));
                  }),
                  rp(() => this.afterPreactivation()),
                  K((a) => {
                    const l = (function HP(e, n, t) {
                      const r = za(e, n._root, t ? t._root : void 0);
                      return new Rb(r, n);
                    })(this.routeReuseStrategy, a.targetSnapshot, a.currentRouterState);
                    return (o = { ...a, targetRouterState: l });
                  }),
                  fn((a) => {
                    (this.currentUrlTree = a.urlAfterRedirects),
                      (this.rawUrlTree = this.urlHandlingStrategy.merge(a.urlAfterRedirects, a.rawUrl)),
                      (this.routerState = a.targetRouterState),
                      'deferred' === this.urlUpdateStrategy &&
                        (a.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, a),
                        (this.browserUrlTree = a.urlAfterRedirects));
                  }),
                  ((e, n, t) => K((r) => (new QP(n, r.targetRouterState, r.currentRouterState, t).activate(e), r)))(
                    this.rootContexts,
                    this.routeReuseStrategy,
                    (a) => this.triggerEvent(a),
                  ),
                  fn({
                    next() {
                      i = !0;
                    },
                    complete() {
                      i = !0;
                    },
                  }),
                  Nh(() => {
                    i || s || this.cancelNavigationTransition(o, '', 1),
                      this.currentNavigation?.id === o.id && (this.currentNavigation = null);
                  }),
                  xo((a) => {
                    if (((s = !0), Bb(a))) {
                      Vb(a) || ((this.navigated = !0), this.restoreHistory(o, !0));
                      const l = new jc(o.id, this.serializeUrl(o.extractedUrl), a.message, a.cancellationCode);
                      if ((r.next(l), Vb(a))) {
                        const c = this.urlHandlingStrategy.merge(a.url, this.rawUrlTree),
                          u = {
                            skipLocationChange: o.extras.skipLocationChange,
                            replaceUrl: 'eager' === this.urlUpdateStrategy || lw(o.source),
                          };
                        this.scheduleNavigation(c, 'imperative', null, u, {
                          resolve: o.resolve,
                          reject: o.reject,
                          promise: o.promise,
                        });
                      } else o.resolve(!1);
                    } else {
                      this.restoreHistory(o, !0);
                      const l = new Tb(o.id, this.serializeUrl(o.extractedUrl), a, o.targetSnapshot ?? void 0);
                      r.next(l);
                      try {
                        o.resolve(this.errorHandler(a));
                      } catch (c) {
                        o.reject(c);
                      }
                    }
                    return kn;
                  }),
                );
              }),
            );
          }
          resetRootComponentType(t) {
            (this.rootComponentType = t), (this.routerState.root.component = this.rootComponentType);
          }
          setTransition(t) {
            this.transitions.next({ ...this.transitions.value, ...t });
          }
          initialNavigation() {
            this.setUpLocationChangeListener(),
              0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
          }
          setUpLocationChangeListener() {
            this.locationSubscription ||
              (this.locationSubscription = this.location.subscribe((t) => {
                const r = 'popstate' === t.type ? 'popstate' : 'hashchange';
                'popstate' === r &&
                  setTimeout(() => {
                    const o = { replaceUrl: !0 },
                      i = t.state?.navigationId ? t.state : null;
                    if (i) {
                      const a = { ...i };
                      delete a.navigationId, delete a.ɵrouterPageId, 0 !== Object.keys(a).length && (o.state = a);
                    }
                    const s = this.parseUrl(t.url);
                    this.scheduleNavigation(s, r, i, o);
                  }, 0);
              }));
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.currentNavigation;
          }
          triggerEvent(t) {
            this.events.next(t);
          }
          resetConfig(t) {
            (this.config = t.map(Jh)), (this.navigated = !1), (this.lastSuccessfulId = -1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.transitions.complete(),
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(), (this.locationSubscription = void 0)),
              (this.disposed = !0);
          }
          createUrlTree(t, r = {}) {
            const { relativeTo: o, queryParams: i, fragment: s, queryParamsHandling: a, preserveFragment: l } = r,
              c = o || this.routerState.root,
              u = l ? this.currentUrlTree.fragment : s;
            let d = null;
            switch (a) {
              case 'merge':
                d = { ...this.currentUrlTree.queryParams, ...i };
                break;
              case 'preserve':
                d = this.currentUrlTree.queryParams;
                break;
              default:
                d = i || null;
            }
            return null !== d && (d = this.removeEmptyProps(d)), bP(c, this.currentUrlTree, t, d, u ?? null);
          }
          navigateByUrl(t, r = { skipLocationChange: !1 }) {
            const o = ci(t) ? t : this.parseUrl(t),
              i = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
            return this.scheduleNavigation(i, 'imperative', null, r);
          }
          navigate(t, r = { skipLocationChange: !1 }) {
            return (
              (function eN(e) {
                for (let n = 0; n < e.length; n++) {
                  if (null == e[n]) throw new _(4008, false);
                }
              })(t),
              this.navigateByUrl(this.createUrlTree(t, r), r)
            );
          }
          serializeUrl(t) {
            return this.urlSerializer.serialize(t);
          }
          parseUrl(t) {
            let r;
            try {
              r = this.urlSerializer.parse(t);
            } catch (o) {
              r = this.malformedUriErrorHandler(o, this.urlSerializer, t);
            }
            return r;
          }
          isActive(t, r) {
            let o;
            if (((o = !0 === r ? { ...Xk } : !1 === r ? { ...Qk } : r), ci(t))) return mb(this.currentUrlTree, t, o);
            const i = this.parseUrl(t);
            return mb(this.currentUrlTree, i, o);
          }
          removeEmptyProps(t) {
            return Object.keys(t).reduce((r, o) => {
              const i = t[o];
              return null != i && (r[o] = i), r;
            }, {});
          }
          processNavigations() {
            this.navigations.subscribe(
              (t) => {
                (this.navigated = !0),
                  (this.lastSuccessfulId = t.id),
                  (this.currentPageId = t.targetPageId),
                  this.events.next(
                    new ui(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(this.currentUrlTree)),
                  ),
                  (this.lastSuccessfulNavigation = this.currentNavigation),
                  this.titleStrategy?.updateTitle(this.routerState.snapshot),
                  t.resolve(!0);
              },
              (t) => {
                this.console.warn(`Unhandled Navigation Error: ${t}`);
              },
            );
          }
          scheduleNavigation(t, r, o, i, s) {
            if (this.disposed) return Promise.resolve(!1);
            let a, l, c;
            s
              ? ((a = s.resolve), (l = s.reject), (c = s.promise))
              : (c = new Promise((g, y) => {
                  (a = g), (l = y);
                }));
            const u = ++this.navigationId;
            let d;
            return (
              'computed' === this.canceledNavigationResolution
                ? (0 === this.currentPageId && (o = this.location.getState()),
                  (d =
                    o && o.ɵrouterPageId
                      ? o.ɵrouterPageId
                      : i.replaceUrl || i.skipLocationChange
                      ? this.browserPageId ?? 0
                      : (this.browserPageId ?? 0) + 1))
                : (d = 0),
              this.setTransition({
                id: u,
                targetPageId: d,
                source: r,
                restoredState: o,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: t,
                extras: i,
                resolve: a,
                reject: l,
                promise: c,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              c.catch((g) => Promise.reject(g))
            );
          }
          setBrowserUrl(t, r) {
            const o = this.urlSerializer.serialize(t),
              i = { ...r.extras.state, ...this.generateNgRouterState(r.id, r.targetPageId) };
            this.location.isCurrentPathEqualTo(o) || r.extras.replaceUrl
              ? this.location.replaceState(o, '', i)
              : this.location.go(o, '', i);
          }
          restoreHistory(t, r = !1) {
            if ('computed' === this.canceledNavigationResolution) {
              const o = this.currentPageId - t.targetPageId;
              ('popstate' !== t.source &&
                'eager' !== this.urlUpdateStrategy &&
                this.currentUrlTree !== this.currentNavigation?.finalUrl) ||
              0 === o
                ? this.currentUrlTree === this.currentNavigation?.finalUrl &&
                  0 === o &&
                  (this.resetState(t), (this.browserUrlTree = t.currentUrlTree), this.resetUrlToCurrentUrlTree())
                : this.location.historyGo(o);
            } else
              'replace' === this.canceledNavigationResolution &&
                (r && this.resetState(t), this.resetUrlToCurrentUrlTree());
          }
          resetState(t) {
            (this.routerState = t.currentRouterState),
              (this.currentUrlTree = t.currentUrlTree),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.rawUrl));
          }
          resetUrlToCurrentUrlTree() {
            this.location.replaceState(
              this.urlSerializer.serialize(this.rawUrlTree),
              '',
              this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
            );
          }
          cancelNavigationTransition(t, r, o) {
            const i = new jc(t.id, this.serializeUrl(t.extractedUrl), r, o);
            this.triggerEvent(i), t.resolve(!1);
          }
          generateNgRouterState(t, r) {
            return 'computed' === this.canceledNavigationResolution
              ? { navigationId: t, ɵrouterPageId: r }
              : { navigationId: t };
          }
        }
        return (
          (e.ɵfac = function (t) {
            wd();
          }),
          (e.ɵprov = Ge({
            token: e,
            factory: function () {
              return aw();
            },
            providedIn: 'root',
          })),
          e
        );
      })();
      function lw(e) {
        return 'imperative' !== e;
      }
      class cw {}
      let rN = (() => {
        class e {
          constructor(t, r, o, i, s) {
            (this.router = t), (this.injector = o), (this.preloadingStrategy = i), (this.loader = s);
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                Nr((t) => t instanceof ui),
                si(() => this.preload()),
              )
              .subscribe(() => {});
          }
          preload() {
            return this.processRoutes(this.injector, this.router.config);
          }
          ngOnDestroy() {
            this.subscription && this.subscription.unsubscribe();
          }
          processRoutes(t, r) {
            const o = [];
            for (const i of r) {
              i.providers && !i._injector && (i._injector = Jl(i.providers, t, `Route: ${i.path}`));
              const s = i._injector ?? t,
                a = i._loadedInjector ?? s;
              (i.loadChildren && !i._loadedRoutes && void 0 === i.canLoad) || (i.loadComponent && !i._loadedComponent)
                ? o.push(this.preloadConfig(s, i))
                : (i.children || i._loadedRoutes) && o.push(this.processRoutes(a, i.children ?? i._loadedRoutes));
            }
            return bt(o).pipe(ar());
          }
          preloadConfig(t, r) {
            return this.preloadingStrategy.preload(r, () => {
              let o;
              o = r.loadChildren && void 0 === r.canLoad ? this.loader.loadChildren(t, r) : $e(null);
              const i = o.pipe(
                Ot((s) =>
                  null === s
                    ? $e(void 0)
                    : ((r._loadedRoutes = s.routes),
                      (r._loadedInjector = s.injector),
                      this.processRoutes(s.injector ?? t, s.routes)),
                ),
              );
              return r.loadComponent && !r._loadedComponent ? bt([i, this.loader.loadComponent(r)]).pipe(ar()) : i;
            });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Se(jt), Se(Sf), Se(Co), Se(cw), Se(ip));
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const ap = new Le('');
      let uw = (() => {
        class e {
          constructor(t, r, o = {}) {
            (this.router = t),
              (this.viewportScroller = r),
              (this.options = o),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (o.scrollPositionRestoration = o.scrollPositionRestoration || 'disabled'),
              (o.anchorScrolling = o.anchorScrolling || 'disabled');
          }
          init() {
            'disabled' !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration('manual'),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.router.events.subscribe((t) => {
              t instanceof Bc
                ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                  (this.lastSource = t.navigationTrigger),
                  (this.restoredId = t.restoredState ? t.restoredState.navigationId : 0))
                : t instanceof ui &&
                  ((this.lastId = t.id),
                  this.scheduleScrollEvent(t, this.router.parseUrl(t.urlAfterRedirects).fragment));
            });
          }
          consumeScrollEvents() {
            return this.router.events.subscribe((t) => {
              t instanceof xb &&
                (t.position
                  ? 'top' === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : 'enabled' === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(t.position)
                  : t.anchor && 'enabled' === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(t.anchor)
                  : 'disabled' !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(t, r) {
            this.router.triggerEvent(new xb(t, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, r));
          }
          ngOnDestroy() {
            this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
              this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
          }
        }
        return (
          (e.ɵfac = function (t) {
            wd();
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function vs(e, n) {
        return { ɵkind: e, ɵproviders: n };
      }
      function lp(e) {
        return [{ provide: op, multi: !0, useValue: e }];
      }
      function fw() {
        const e = Vt(kt);
        return (n) => {
          const t = e.get(wa);
          if (n !== t.components[0]) return;
          const r = e.get(jt),
            o = e.get(hw);
          1 === e.get(cp) && r.initialNavigation(),
            e.get(pw, null, Be.Optional)?.setUpPreloading(),
            e.get(ap, null, Be.Optional)?.init(),
            r.resetRootComponentType(t.componentTypes[0]),
            o.closed || (o.next(), o.unsubscribe());
        };
      }
      const hw = new Le('', { factory: () => new q() }),
        cp = new Le('', { providedIn: 'root', factory: () => 1 });
      const pw = new Le('');
      function aN(e) {
        return vs(0, [
          { provide: pw, useExisting: rN },
          { provide: cw, useExisting: e },
        ]);
      }
      const gw = new Le('ROUTER_FORROOT_GUARD'),
        lN = [
          Sa,
          { provide: $h, useClass: Vh },
          { provide: jt, useFactory: aw },
          di,
          {
            provide: $r,
            useFactory: function dw(e) {
              return e.routerState.root;
            },
            deps: [jt],
          },
          ip,
        ];
      function cN() {
        return new $_('Router', jt);
      }
      let mw = (() => {
        class e {
          constructor(t) {}
          static forRoot(t, r) {
            return {
              ngModule: e,
              providers: [
                lN,
                [],
                lp(t),
                { provide: gw, useFactory: hN, deps: [[jt, new Zs(), new Xs()]] },
                { provide: Xc, useValue: r || {} },
                r?.useHash ? { provide: ro, useClass: gx } : { provide: ro, useClass: cD },
                {
                  provide: ap,
                  useFactory: () => {
                    const e = Vt(jt),
                      n = Vt(PF),
                      t = Vt(Xc);
                    return t.scrollOffset && n.setOffset(t.scrollOffset), new uw(e, n, t);
                  },
                },
                r?.preloadingStrategy ? aN(r.preloadingStrategy).ɵproviders : [],
                { provide: $_, multi: !0, useFactory: cN },
                r?.initialNavigation ? pN(r) : [],
                [
                  { provide: vw, useFactory: fw },
                  { provide: F_, multi: !0, useExisting: vw },
                ],
              ],
            };
          }
          static forChild(t) {
            return { ngModule: e, providers: [lp(t)] };
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Se(gw, 8));
          }),
          (e.ɵmod = jr({ type: e })),
          (e.ɵinj = Er({ imports: [Xh] })),
          e
        );
      })();
      function hN(e) {
        return 'guarded';
      }
      function pN(e) {
        return [
          'disabled' === e.initialNavigation
            ? vs(3, [
                {
                  provide: Ca,
                  multi: !0,
                  useFactory: () => {
                    const n = Vt(jt);
                    return () => {
                      n.setUpLocationChangeListener();
                    };
                  },
                },
                { provide: cp, useValue: 2 },
              ]).ɵproviders
            : [],
          'enabledBlocking' === e.initialNavigation
            ? vs(2, [
                { provide: cp, useValue: 0 },
                {
                  provide: Ca,
                  multi: !0,
                  deps: [kt],
                  useFactory: (n) => {
                    const t = n.get(hx, Promise.resolve());
                    let r = !1;
                    return () =>
                      t.then(
                        () =>
                          new Promise((i) => {
                            const s = n.get(jt),
                              a = n.get(hw);
                            (function o(i) {
                              n.get(jt)
                                .events.pipe(
                                  Nr((a) => a instanceof ui || a instanceof jc || a instanceof Tb),
                                  K(
                                    (a) =>
                                      a instanceof ui || (a instanceof jc && (0 === a.code || 1 === a.code) && null),
                                  ),
                                  Nr((a) => null !== a),
                                  La(1),
                                )
                                .subscribe(() => {
                                  i();
                                });
                            })(() => {
                              i(!0), (r = !0);
                            }),
                              (s.afterPreactivation = () => (i(!0), r || a.closed ? $e(void 0) : a)),
                              s.initialNavigation();
                          }),
                      );
                  },
                },
              ]).ɵproviders
            : [],
        ];
      }
      const vw = new Le('');
      ae(8834), ae(3953), ae(3880), ae(1911);
      var up = ae(9658),
        Xa = (ae(5730), ae(697)),
        yw = (ae(4292), ae(1312)),
        _w = (ae(3457), ae(4349), ae(1308));
      const DN = up.i,
        ve = ['*'],
        Cw = (e) =>
          'function' == typeof __zone_symbol__requestAnimationFrame
            ? __zone_symbol__requestAnimationFrame(e)
            : 'function' == typeof requestAnimationFrame
            ? requestAnimationFrame(e)
            : setTimeout(e),
        kN = (e, n) => {
          const t = e.prototype;
          n.forEach((r) => {
            Object.defineProperty(t, r, {
              get() {
                return this.el[r];
              },
              set(o) {
                this.z.runOutsideAngular(() => (this.el[r] = o));
              },
            });
          });
        },
        NN = (e, n) => {
          const t = e.prototype;
          n.forEach((r) => {
            t[r] = function () {
              const o = arguments;
              return this.z.runOutsideAngular(() => this.el[r].apply(this.el, o));
            };
          });
        };
      function fe(e) {
        return function (t) {
          const { defineCustomElementFn: r, inputs: o, methods: i } = e;
          return void 0 !== r && r(), o && kN(t, o), i && NN(t, i), t;
        };
      }
      let Ds = (() => {
        let e = class {
          constructor(t, r, o) {
            (this.z = o), t.detach(), (this.el = r.nativeElement);
          }
        };
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(h(ce), h(Q), h(J));
          }),
          (e.ɵcmp = se({
            type: e,
            selectors: [['ion-icon']],
            inputs: {
              color: 'color',
              flipRtl: 'flipRtl',
              icon: 'icon',
              ios: 'ios',
              lazy: 'lazy',
              md: 'md',
              mode: 'mode',
              name: 'name',
              sanitize: 'sanitize',
              size: 'size',
              src: 'src',
            },
            ngContentSelectors: ve,
            decls: 1,
            vars: 0,
            template: function (t, r) {
              1 & t &&
                ((function he(e) {
                  const n = Y()[16][6];
                  if (!n.projection) {
                    const r = (n.projection = Ws(e ? e.length : 1, null)),
                      o = r.slice();
                    let i = n.child;
                    for (; null !== i; ) {
                      const s = e ? kM(i, e) : 0;
                      null !== s && (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i)), (i = i.next);
                    }
                  }
                })(),
                (function de(e, n = 0, t) {
                  const r = Y(),
                    o = lt(),
                    i = Ki(o, 22 + e, 16, null, t || null);
                  null === i.projection && (i.projection = n),
                    vu(),
                    64 != (64 & i.flags) &&
                      (function XE(e, n, t) {
                        Wg(n[11], 0, n, t, Lg(e, t, n), jg(t.parent || n[6], t, n));
                      })(o, r, i);
                })(0));
            },
            encapsulation: 2,
            changeDetection: 0,
          })),
          (e = (function G(e, n, t, r) {
            var s,
              o = arguments.length,
              i = o < 3 ? n : null === r ? (r = Object.getOwnPropertyDescriptor(n, t)) : r;
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) i = Reflect.decorate(e, n, t, r);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (s = e[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(n, t, i) : s(n, t)) || i);
            return o > 3 && i && Object.defineProperty(n, t, i), i;
          })(
            [
              fe({
                defineCustomElementFn: void 0,
                inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src'],
              }),
            ],
            e,
          )),
          e
        );
      })();
      class Ew {
        constructor(n = {}) {
          this.data = n;
        }
        get(n) {
          return this.data[n];
        }
      }
      let tu = (() => {
        class e {
          constructor(t, r) {
            (this.zone = t), (this.appRef = r);
          }
          create(t, r, o) {
            return new r$(t, r, o, this.appRef, this.zone);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Se(J), Se(wa));
          }),
          (e.ɵprov = Ge({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class r$ {
        constructor(n, t, r, o, i) {
          (this.resolverOrInjector = n),
            (this.injector = t),
            (this.location = r),
            (this.appRef = o),
            (this.zone = i),
            (this.elRefMap = new WeakMap()),
            (this.elEventsMap = new WeakMap());
        }
        attachViewToDom(n, t, r, o) {
          return this.zone.run(
            () =>
              new Promise((i) => {
                i(
                  o$(
                    this.zone,
                    this.resolverOrInjector,
                    this.injector,
                    this.location,
                    this.appRef,
                    this.elRefMap,
                    this.elEventsMap,
                    n,
                    t,
                    r,
                    o,
                  ),
                );
              }),
          );
        }
        removeViewFromDom(n, t) {
          return this.zone.run(
            () =>
              new Promise((r) => {
                const o = this.elRefMap.get(t);
                if (o) {
                  o.destroy(), this.elRefMap.delete(t);
                  const i = this.elEventsMap.get(t);
                  i && (i(), this.elEventsMap.delete(t));
                }
                r();
              }),
          );
        }
      }
      const o$ = (e, n, t, r, o, i, s, a, l, c, u) => {
          let d;
          const g = kt.create({ providers: s$(c), parent: t });
          if (n && ((e) => !!e.resolveComponentFactory)(n)) {
            const V = n.resolveComponentFactory(l);
            d = r ? r.createComponent(V, r.length, g) : V.create(g);
          } else {
            if (!r) return null;
            d = r.createComponent(l, { index: r.indexOf, injector: g, environmentInjector: n });
          }
          const y = d.instance,
            w = d.location.nativeElement;
          if ((c && Object.assign(y, c), u)) for (const V of u) w.classList.add(V);
          const F = Iw(e, y, w);
          return (
            a.appendChild(w), r || o.attachView(d.hostView), d.changeDetectorRef.reattach(), i.set(w, d), s.set(w, F), w
          );
        },
        i$ = [Xa.L, Xa.a, Xa.b, Xa.c, Xa.d],
        Iw = (e, n, t) =>
          e.run(() => {
            const r = i$
              .filter((o) => 'function' == typeof n[o])
              .map((o) => {
                const i = (s) => n[o](s.detail);
                return t.addEventListener(o, i), () => t.removeEventListener(o, i);
              });
            return () => r.forEach((o) => o());
          }),
        Sw = new Le('NavParamsToken'),
        s$ = (e) => [
          { provide: Sw, useValue: e },
          { provide: Ew, useFactory: a$, deps: [Sw] },
        ],
        a$ = (e) => new Ew(e),
        Rw = new Le('USERCONFIG');
      class $w {
        constructor(n) {
          this.ctrl = n;
        }
        create(n) {
          return this.ctrl.create(n || {});
        }
        dismiss(n, t, r) {
          return this.ctrl.dismiss(n, t, r);
        }
        getTop() {
          return this.ctrl.getTop();
        }
      }
      class Vw {}
      let A$ = (() => {
          class e extends $w {
            constructor(t, r, o, i) {
              super(yw.m),
                (this.angularDelegate = t),
                (this.resolver = r),
                (this.injector = o),
                (this.environmentInjector = i);
            }
            create(t) {
              var r;
              return super.create(
                Object.assign(Object.assign({}, t), {
                  delegate: this.angularDelegate.create(
                    null !== (r = this.resolver) && void 0 !== r ? r : this.environmentInjector,
                    this.injector,
                  ),
                }),
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Se(tu), Se(Wr), Se(kt), Se(Vw, 8));
            }),
            (e.ɵprov = Ge({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        T$ = (() => {
          class e extends $w {
            constructor(t, r, o, i) {
              super(yw.c),
                (this.angularDelegate = t),
                (this.resolver = r),
                (this.injector = o),
                (this.environmentInjector = i);
            }
            create(t) {
              var r;
              return super.create(
                Object.assign(Object.assign({}, t), {
                  delegate: this.angularDelegate.create(
                    null !== (r = this.resolver) && void 0 !== r ? r : this.environmentInjector,
                    this.injector,
                  ),
                }),
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Se(tu), Se(Wr), Se(kt), Se(Vw, 8));
            }),
            (e.ɵprov = Ge({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const x$ = (e, n, t) => () => {
        if (n.defaultView && typeof window < 'u') {
          ((e) => {
            const n = window,
              t = n.Ionic;
            (t && t.config && 'Object' !== t.config.constructor.name) ||
              ((n.Ionic = n.Ionic || {}), (n.Ionic.config = Object.assign(Object.assign({}, n.Ionic.config), e)));
          })(Object.assign(Object.assign({}, e), { _zoneGate: (i) => t.run(i) }));
          const o =
            '__zone_symbol__addEventListener' in n.body ? '__zone_symbol__addEventListener' : 'addEventListener';
          return (function _N() {
            var e = [];
            if (typeof window < 'u') {
              var n = window;
              (!n.customElements ||
                (n.Element &&
                  (!n.Element.prototype.closest ||
                    !n.Element.prototype.matches ||
                    !n.Element.prototype.remove ||
                    !n.Element.prototype.getRootNode))) &&
                e.push(ae.e(6748).then(ae.t.bind(ae, 723, 23))),
                ('function' != typeof Object.assign ||
                  !Object.entries ||
                  !Array.prototype.find ||
                  !Array.prototype.includes ||
                  !String.prototype.startsWith ||
                  !String.prototype.endsWith ||
                  (n.NodeList && !n.NodeList.prototype.forEach) ||
                  !n.fetch ||
                  !(function () {
                    try {
                      var r = new URL('b', 'http://a');
                      return (r.pathname = 'c%20d'), 'http://a/c%20d' === r.href && r.searchParams;
                    } catch {
                      return !1;
                    }
                  })() ||
                  typeof WeakMap > 'u') &&
                  e.push(ae.e(2214).then(ae.t.bind(ae, 4144, 23)));
            }
            return Promise.all(e);
          })().then(() =>
            ((e, n) =>
              typeof window > 'u'
                ? Promise.resolve()
                : (0, _w.p)().then(
                    () => (
                      DN(),
                      (0, _w.b)(
                        JSON.parse(
                          '[["ion-menu_3",[[33,"ion-menu-button",{"color":[513],"disabled":[4],"menu":[1],"autoHide":[4,"auto-hide"],"type":[1],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]],[33,"ion-menu",{"contentId":[513,"content-id"],"menuId":[513,"menu-id"],"type":[1025],"disabled":[1028],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[16,"ionSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"],[0,"keydown","onKeydown"]]],[1,"ion-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]]]],["ion-fab_3",[[33,"ion-fab-button",{"color":[513],"activated":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1],"show":[4],"translucent":[4],"type":[1],"size":[1],"closeIcon":[1,"close-icon"]}],[1,"ion-fab",{"horizontal":[1],"vertical":[1],"edge":[4],"activated":[1028],"close":[64],"toggle":[64]}],[1,"ion-fab-list",{"activated":[4],"side":[1]}]]],["ion-refresher_2",[[0,"ion-refresher-content",{"pullingIcon":[1025,"pulling-icon"],"pullingText":[1,"pulling-text"],"refreshingSpinner":[1025,"refreshing-spinner"],"refreshingText":[1,"refreshing-text"]}],[32,"ion-refresher",{"pullMin":[2,"pull-min"],"pullMax":[2,"pull-max"],"closeDuration":[1,"close-duration"],"snapbackDuration":[1,"snapback-duration"],"pullFactor":[2,"pull-factor"],"disabled":[4],"nativeRefresher":[32],"state":[32],"complete":[64],"cancel":[64],"getProgress":[64]}]]],["ion-back-button",[[33,"ion-back-button",{"color":[513],"defaultHref":[1025,"default-href"],"disabled":[516],"icon":[1],"text":[1],"type":[1],"routerAnimation":[16]}]]],["ion-toast",[[33,"ion-toast",{"overlayIndex":[2,"overlay-index"],"color":[513],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"message":[1],"keyboardClose":[4,"keyboard-close"],"position":[1],"buttons":[16],"translucent":[4],"animated":[4],"icon":[1],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ion-card_5",[[33,"ion-card",{"color":[513],"button":[4],"type":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}],[32,"ion-card-content"],[33,"ion-card-header",{"color":[513],"translucent":[4]}],[33,"ion-card-subtitle",{"color":[513]}],[33,"ion-card-title",{"color":[513]}]]],["ion-item-option_3",[[33,"ion-item-option",{"color":[513],"disabled":[4],"download":[1],"expandable":[4],"href":[1],"rel":[1],"target":[1],"type":[1]}],[32,"ion-item-options",{"side":[1],"fireSwipeEvent":[64]}],[0,"ion-item-sliding",{"disabled":[4],"state":[32],"getOpenAmount":[64],"getSlidingRatio":[64],"open":[64],"close":[64],"closeOpened":[64]}]]],["ion-accordion_2",[[49,"ion-accordion",{"value":[1],"disabled":[4],"readonly":[4],"toggleIcon":[1,"toggle-icon"],"toggleIconSlot":[1,"toggle-icon-slot"],"state":[32],"isNext":[32],"isPrevious":[32]}],[33,"ion-accordion-group",{"animated":[4],"multiple":[4],"value":[1025],"disabled":[4],"readonly":[4],"expand":[1],"requestAccordionToggle":[64],"getAccordions":[64]},[[0,"keydown","onKeydown"]]]]],["ion-breadcrumb_2",[[33,"ion-breadcrumb",{"collapsed":[4],"last":[4],"showCollapsedIndicator":[4,"show-collapsed-indicator"],"color":[1],"active":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"separator":[4],"target":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}],[33,"ion-breadcrumbs",{"color":[1],"maxItems":[2,"max-items"],"itemsBeforeCollapse":[2,"items-before-collapse"],"itemsAfterCollapse":[2,"items-after-collapse"],"collapsed":[32],"activeChanged":[32]},[[0,"collapsedClick","onCollapsedClick"]]]]],["ion-infinite-scroll_2",[[32,"ion-infinite-scroll-content",{"loadingSpinner":[1025,"loading-spinner"],"loadingText":[1,"loading-text"]}],[0,"ion-infinite-scroll",{"threshold":[1],"disabled":[4],"position":[1],"isLoading":[32],"complete":[64]}]]],["ion-reorder_2",[[33,"ion-reorder",null,[[2,"click","onClick"]]],[0,"ion-reorder-group",{"disabled":[4],"state":[32],"complete":[64]}]]],["ion-segment_2",[[33,"ion-segment-button",{"disabled":[4],"layout":[1],"type":[1],"value":[1],"checked":[32]}],[33,"ion-segment",{"color":[513],"disabled":[4],"scrollable":[4],"swipeGesture":[4,"swipe-gesture"],"value":[1025],"selectOnFocus":[4,"select-on-focus"],"activated":[32]},[[0,"keydown","onKeyDown"]]]]],["ion-tab-bar_2",[[33,"ion-tab-button",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1025],"selected":[1028],"tab":[1],"target":[1]},[[8,"ionTabBarChanged","onTabBarChanged"]]],[33,"ion-tab-bar",{"color":[513],"selectedTab":[1,"selected-tab"],"translucent":[4],"keyboardVisible":[32]}]]],["ion-chip",[[1,"ion-chip",{"color":[513],"outline":[4],"disabled":[4]}]]],["ion-datetime-button",[[33,"ion-datetime-button",{"color":[513],"disabled":[516],"datetime":[1],"datetimePresentation":[32],"dateText":[32],"timeText":[32],"datetimeActive":[32],"selectedButton":[32]}]]],["ion-input",[[34,"ion-input",{"fireFocusEvents":[4,"fire-focus-events"],"color":[513],"accept":[1],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[4],"enterkeyhint":[1],"inputmode":[1],"max":[8],"maxlength":[2],"min":[8],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"step":[1],"size":[2],"type":[1],"value":[1032],"hasFocus":[32],"setFocus":[64],"setBlur":[64],"getInputElement":[64]}]]],["ion-searchbar",[[34,"ion-searchbar",{"color":[513],"animated":[4],"autocomplete":[1],"autocorrect":[1],"cancelButtonIcon":[1,"cancel-button-icon"],"cancelButtonText":[1,"cancel-button-text"],"clearIcon":[1,"clear-icon"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[1,"show-cancel-button"],"showClearButton":[1,"show-clear-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]}]]],["ion-toggle",[[33,"ion-toggle",{"color":[513],"name":[1],"checked":[1028],"disabled":[4],"value":[1],"enableOnOffLabels":[4,"enable-on-off-labels"],"activated":[32]}]]],["ion-avatar_3",[[33,"ion-avatar"],[33,"ion-badge",{"color":[513]}],[1,"ion-thumbnail"]]],["ion-textarea",[[34,"ion-textarea",{"fireFocusEvents":[4,"fire-focus-events"],"color":[513],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[1028,"clear-on-edit"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"cols":[2],"rows":[2],"wrap":[1],"autoGrow":[516,"auto-grow"],"value":[1025],"hasFocus":[32],"setFocus":[64],"setBlur":[64],"getInputElement":[64]}]]],["ion-backdrop",[[33,"ion-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]],["ion-loading",[[34,"ion-loading",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"message":[1],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"spinner":[1025],"translucent":[4],"animated":[4],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ion-modal",[[33,"ion-modal",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"breakpoints":[16],"initialBreakpoint":[2,"initial-breakpoint"],"backdropBreakpoint":[2,"backdrop-breakpoint"],"handle":[4],"handleBehavior":[1,"handle-behavior"],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"swipeToClose":[4,"swipe-to-close"],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"keepContentsMounted":[4,"keep-contents-mounted"],"canDismiss":[4,"can-dismiss"],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"setCurrentBreakpoint":[64],"getCurrentBreakpoint":[64]}]]],["ion-route_4",[[0,"ion-route",{"url":[1],"component":[1],"componentProps":[16],"beforeLeave":[16],"beforeEnter":[16]}],[0,"ion-route-redirect",{"from":[1],"to":[1]}],[0,"ion-router",{"root":[1],"useHash":[4,"use-hash"],"canTransition":[64],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"ionBackButton","onBackButton"]]],[1,"ion-router-link",{"color":[513],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}]]],["ion-col_3",[[1,"ion-col",{"offset":[1],"offsetXs":[1,"offset-xs"],"offsetSm":[1,"offset-sm"],"offsetMd":[1,"offset-md"],"offsetLg":[1,"offset-lg"],"offsetXl":[1,"offset-xl"],"pull":[1],"pullXs":[1,"pull-xs"],"pullSm":[1,"pull-sm"],"pullMd":[1,"pull-md"],"pullLg":[1,"pull-lg"],"pullXl":[1,"pull-xl"],"push":[1],"pushXs":[1,"push-xs"],"pushSm":[1,"push-sm"],"pushMd":[1,"push-md"],"pushLg":[1,"push-lg"],"pushXl":[1,"push-xl"],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"]},[[9,"resize","onResize"]]],[1,"ion-grid",{"fixed":[4]}],[1,"ion-row"]]],["ion-nav_2",[[1,"ion-nav",{"delegate":[16],"swipeGesture":[1028,"swipe-gesture"],"animated":[4],"animation":[16],"rootParams":[16],"root":[1],"push":[64],"insert":[64],"insertPages":[64],"pop":[64],"popTo":[64],"popToRoot":[64],"removeIndex":[64],"setRoot":[64],"setPages":[64],"setRouteId":[64],"getRouteId":[64],"getActive":[64],"getByIndex":[64],"canGoBack":[64],"getPrevious":[64]}],[0,"ion-nav-link",{"component":[1],"componentProps":[16],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}]]],["ion-slide_2",[[0,"ion-slide"],[36,"ion-slides",{"options":[8],"pager":[4],"scrollbar":[4],"update":[64],"updateAutoHeight":[64],"slideTo":[64],"slideNext":[64],"slidePrev":[64],"getActiveIndex":[64],"getPreviousIndex":[64],"length":[64],"isEnd":[64],"isBeginning":[64],"startAutoplay":[64],"stopAutoplay":[64],"lockSwipeToNext":[64],"lockSwipeToPrev":[64],"lockSwipes":[64],"getSwiper":[64]}]]],["ion-tab_2",[[1,"ion-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]}],[1,"ion-tabs",{"useRouter":[1028,"use-router"],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["ion-img",[[1,"ion-img",{"alt":[1],"src":[1],"loadSrc":[32],"loadError":[32]}]]],["ion-progress-bar",[[33,"ion-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[513]}]]],["ion-range",[[33,"ion-range",{"color":[513],"debounce":[2],"name":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"pinFormatter":[16],"snaps":[4],"step":[2],"ticks":[4],"activeBarStart":[1026,"active-bar-start"],"disabled":[4],"value":[1026],"ratioA":[32],"ratioB":[32],"pressedKnob":[32]}]]],["ion-split-pane",[[33,"ion-split-pane",{"contentId":[513,"content-id"],"disabled":[4],"when":[8],"visible":[32]}]]],["ion-text",[[1,"ion-text",{"color":[513]}]]],["ion-virtual-scroll",[[0,"ion-virtual-scroll",{"approxItemHeight":[2,"approx-item-height"],"approxHeaderHeight":[2,"approx-header-height"],"approxFooterHeight":[2,"approx-footer-height"],"headerFn":[16],"footerFn":[16],"items":[16],"itemHeight":[16],"headerHeight":[16],"footerHeight":[16],"renderItem":[16],"renderHeader":[16],"renderFooter":[16],"nodeRender":[16],"domRender":[16],"totalHeight":[32],"positionForItem":[64],"checkRange":[64],"checkEnd":[64]},[[9,"resize","onResize"]]]]],["ion-picker-column-internal",[[33,"ion-picker-column-internal",{"items":[16],"value":[1032],"color":[513],"numericInput":[4,"numeric-input"],"isActive":[32],"scrollActiveItemIntoView":[64],"setValue":[64]}]]],["ion-picker-internal",[[33,"ion-picker-internal",null,[[1,"touchstart","preventTouchStartPropagation"]]]]],["ion-radio_2",[[33,"ion-radio",{"color":[513],"name":[1],"disabled":[4],"value":[8],"checked":[32],"buttonTabindex":[32],"setFocus":[64],"setButtonTabindex":[64]}],[0,"ion-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"name":[1],"value":[1032]},[[4,"keydown","onKeydown"]]]]],["ion-ripple-effect",[[1,"ion-ripple-effect",{"type":[1],"addRipple":[64]}]]],["ion-button_2",[[33,"ion-button",{"color":[513],"buttonType":[1025,"button-type"],"disabled":[516],"expand":[513],"fill":[1537],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"download":[1],"href":[1],"rel":[1],"shape":[513],"size":[513],"strong":[4],"target":[1],"type":[1],"form":[1]}],[1,"ion-icon",{"mode":[1025],"color":[1],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[513],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32],"ariaLabel":[32]}]]],["ion-datetime_3",[[33,"ion-datetime",{"color":[1],"name":[1],"disabled":[4],"readonly":[4],"isDateEnabled":[16],"min":[1025],"max":[1025],"presentation":[1],"cancelText":[1,"cancel-text"],"doneText":[1,"done-text"],"clearText":[1,"clear-text"],"yearValues":[8,"year-values"],"monthValues":[8,"month-values"],"dayValues":[8,"day-values"],"hourValues":[8,"hour-values"],"minuteValues":[8,"minute-values"],"locale":[1],"firstDayOfWeek":[2,"first-day-of-week"],"titleSelectedDatesFormatter":[16],"multiple":[4],"value":[1025],"showDefaultTitle":[4,"show-default-title"],"showDefaultButtons":[4,"show-default-buttons"],"showClearButton":[4,"show-clear-button"],"showDefaultTimeLabel":[4,"show-default-time-label"],"hourCycle":[1,"hour-cycle"],"size":[1],"preferWheel":[4,"prefer-wheel"],"showMonthAndYear":[32],"activeParts":[32],"workingParts":[32],"isPresented":[32],"isTimePopoverOpen":[32],"confirm":[64],"reset":[64],"cancel":[64]}],[34,"ion-picker",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"columns":[16],"cssClass":[1,"css-class"],"duration":[2],"showBackdrop":[4,"show-backdrop"],"backdropDismiss":[4,"backdrop-dismiss"],"animated":[4],"htmlAttributes":[16],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"getColumn":[64]}],[32,"ion-picker-column",{"col":[16]}]]],["ion-action-sheet",[[34,"ion-action-sheet",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"header":[1],"subHeader":[1,"sub-header"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ion-alert",[[34,"ion-alert",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[1040],"backdropDismiss":[4,"backdrop-dismiss"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[4,"keydown","onKeydown"]]]]],["ion-popover",[[33,"ion-popover",{"hasController":[4,"has-controller"],"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"triggerAction":[1,"trigger-action"],"trigger":[1],"size":[1],"dismissOnSelect":[4,"dismiss-on-select"],"reference":[1],"side":[1],"alignment":[1025],"arrow":[4],"isOpen":[4,"is-open"],"keyboardEvents":[4,"keyboard-events"],"keepContentsMounted":[4,"keep-contents-mounted"],"presented":[32],"presentFromTrigger":[64],"present":[64],"dismiss":[64],"getParentPopover":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ion-checkbox",[[33,"ion-checkbox",{"color":[513],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"value":[8]}]]],["ion-select_3",[[33,"ion-select",{"disabled":[4],"cancelText":[1,"cancel-text"],"okText":[1,"ok-text"],"placeholder":[1],"name":[1],"selectedText":[1,"selected-text"],"multiple":[4],"interface":[1],"interfaceOptions":[8,"interface-options"],"compareWith":[1,"compare-with"],"value":[1032],"isExpanded":[32],"open":[64]}],[1,"ion-select-option",{"disabled":[4],"value":[8]}],[34,"ion-select-popover",{"header":[1],"subHeader":[1,"sub-header"],"message":[1],"multiple":[4],"options":[16]},[[0,"ionChange","onSelect"]]]]],["ion-app_8",[[0,"ion-app",{"setFocus":[64]}],[1,"ion-content",{"color":[513],"fullscreen":[4],"forceOverscroll":[1028,"force-overscroll"],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"getScrollElement":[64],"getBackgroundElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[8,"appload","onAppLoad"]]],[36,"ion-footer",{"collapse":[1],"translucent":[4],"keyboardVisible":[32]}],[36,"ion-header",{"collapse":[1],"translucent":[4]}],[1,"ion-router-outlet",{"mode":[1025],"delegate":[16],"animated":[4],"animation":[16],"swipeHandler":[16],"commit":[64],"setRouteId":[64],"getRouteId":[64]}],[33,"ion-title",{"color":[513],"size":[1]}],[33,"ion-toolbar",{"color":[513]},[[0,"ionStyle","childrenStyle"]]],[34,"ion-buttons",{"collapse":[4]}]]],["ion-spinner",[[1,"ion-spinner",{"color":[513],"duration":[2],"name":[1],"paused":[4]}]]],["ion-item_8",[[33,"ion-item-divider",{"color":[513],"sticky":[4]}],[32,"ion-item-group"],[1,"ion-skeleton-text",{"animated":[4]}],[32,"ion-list",{"lines":[1],"inset":[4],"closeSlidingItems":[64]}],[33,"ion-list-header",{"color":[513],"lines":[1]}],[49,"ion-item",{"color":[513],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[4],"download":[1],"fill":[1],"shape":[1],"href":[1],"rel":[1],"lines":[1],"counter":[4],"routerAnimation":[16],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"counterFormatter":[16],"multipleInputs":[32],"focusable":[32],"counterString":[32]},[[0,"ionChange","handleIonChange"],[0,"ionColor","labelColorChanged"],[0,"ionStyle","itemStyle"]]],[34,"ion-label",{"color":[513],"position":[1],"noAnimate":[32]}],[33,"ion-note",{"color":[513]}]]]]',
                        ),
                        n,
                      )
                    ),
                  ))(0, {
              exclude: ['ion-tabs', 'ion-tab'],
              syncQueue: !0,
              raf: Cw,
              jmp: (i) => t.runOutsideAngular(i),
              ael(i, s, a, l) {
                i[o](s, a, l);
              },
              rel(i, s, a, l) {
                i.removeEventListener(s, a, l);
              },
            }),
          );
        }
      };
      let F$ = (() => {
        class e {
          static forRoot(t) {
            return {
              ngModule: e,
              providers: [
                { provide: Rw, useValue: t },
                { provide: Ca, useFactory: x$, multi: !0, deps: [Rw, cn, J] },
              ],
            };
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = jr({ type: e })),
          (e.ɵinj = Er({ providers: [tu, A$, T$], imports: [[SD]] })),
          e
        );
      })();
      const R$ = [];
      let O$ = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = jr({ type: e })),
            (e.ɵinj = Er({ imports: [mw.forRoot(R$), mw] })),
            e
          );
        })(),
        P$ = (() => {
          class e {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = se({
              type: e,
              selectors: [['app-sidebar']],
              decls: 59,
              vars: 0,
              consts: [
                ['data-sidebar', '', 1, 'sidebar'],
                [1, 'sidebar-info'],
                [1, 'avatar-box'],
                ['src', 'assets/images/ashrmbg.png', 'alt', 'ashique', 'width', '80'],
                [1, 'info-content'],
                ['title', 'ashique', 1, 'name'],
                [1, 'title'],
                ['data-sidebar-btn', '', 1, 'info_more-btn'],
                ['name', 'chevron-down'],
                [1, 'sidebar-info_more'],
                [1, 'separator'],
                [1, 'contacts-list'],
                [1, 'contact-item'],
                [1, 'icon-box'],
                ['name', 'mail-outline'],
                [1, 'contact-info'],
                [1, 'contact-title'],
                ['href', 'mailto:ashiquet0858@gmail.com', 1, 'contact-link'],
                ['name', 'phone-portrait-outline'],
                ['href', 'tel:+919526569962', 1, 'contact-link'],
                ['name', 'calendar-outline'],
                ['datetime', '1999-08-05'],
                ['name', 'location-outline'],
                [1, 'social-list'],
                [1, 'social-item'],
                ['href', 'https://www.facebook.com/ashique.thettan', 'target', '_blank', 1, 'social-link'],
                ['name', 'logo-facebook'],
                ['href', 'https://twitter.com/Ashiquet0858', 'target', '_blank', 1, 'social-link'],
                ['name', 'logo-twitter'],
                ['href', 'https://www.instagram.com/ashique_ash__/', 'target', '_blank', 1, 'social-link'],
                ['name', 'logo-instagram'],
              ],
              template: function (t, r) {
                1 & t &&
                  (A(0, 'aside', 0)(1, 'div', 1)(2, 'figure', 2),
                  Pe(3, 'img', 3),
                  I(),
                  A(4, 'div', 4)(5, 'h1', 5),
                  X(6, 'Ashique T'),
                  I(),
                  A(7, 'p', 6),
                  X(8, 'Senior Software Engineer'),
                  I()(),
                  A(9, 'button', 7)(10, 'span'),
                  X(11, 'Show Contacts'),
                  I(),
                  Pe(12, 'ion-icon', 8),
                  I()(),
                  A(13, 'div', 9),
                  Pe(14, 'div', 10),
                  A(15, 'ul', 11)(16, 'li', 12)(17, 'div', 13),
                  Pe(18, 'ion-icon', 14),
                  I(),
                  A(19, 'div', 15)(20, 'p', 16),
                  X(21, 'Email'),
                  I(),
                  A(22, 'a', 17),
                  X(23, 'ashiquet0858@gmail.com'),
                  I()()(),
                  A(24, 'li', 12)(25, 'div', 13),
                  Pe(26, 'ion-icon', 18),
                  I(),
                  A(27, 'div', 15)(28, 'p', 16),
                  X(29, 'Phone'),
                  I(),
                  A(30, 'a', 19),
                  X(31, '+91 9526569962'),
                  I()()(),
                  A(32, 'li', 12)(33, 'div', 13),
                  Pe(34, 'ion-icon', 20),
                  I(),
                  A(35, 'div', 15)(36, 'p', 16),
                  X(37, 'Birthday'),
                  I(),
                  A(38, 'time', 21),
                  X(39, 'August 5, 1999'),
                  I()()(),
                  A(40, 'li', 12)(41, 'div', 13),
                  Pe(42, 'ion-icon', 22),
                  I(),
                  A(43, 'div', 15)(44, 'p', 16),
                  X(45, 'Location'),
                  I(),
                  A(46, 'address'),
                  X(47, 'Wayanad, Kerala, India'),
                  I()()()(),
                  Pe(48, 'div', 10),
                  A(49, 'ul', 23)(50, 'li', 24)(51, 'a', 25),
                  Pe(52, 'ion-icon', 26),
                  I()(),
                  A(53, 'li', 24)(54, 'a', 27),
                  Pe(55, 'ion-icon', 28),
                  I()(),
                  A(56, 'li', 24)(57, 'a', 29),
                  Pe(58, 'ion-icon', 30),
                  I()()()()());
              },
              dependencies: [Ds],
            })),
            e
          );
        })(),
        k$ = (() => {
          class e {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = se({
              type: e,
              selectors: [['app-nav']],
              decls: 17,
              vars: 0,
              consts: [
                [1, 'navbar'],
                [1, 'navbar-list'],
                [1, 'navbar-item'],
                ['data-nav-link', '', 1, 'navbar-link', 'active'],
                ['data-nav-link', '', 1, 'navbar-link'],
              ],
              template: function (t, r) {
                1 & t &&
                  (A(0, 'nav', 0)(1, 'ul', 1)(2, 'li', 2)(3, 'button', 3),
                  X(4, 'About'),
                  I()(),
                  A(5, 'li', 2)(6, 'button', 4),
                  X(7, 'Resume'),
                  I()(),
                  A(8, 'li', 2)(9, 'button', 4),
                  X(10, 'Portfolio'),
                  I()(),
                  A(11, 'li', 2)(12, 'button', 4),
                  X(13, 'Blog'),
                  I()(),
                  A(14, 'li', 2)(15, 'button', 4),
                  X(16, 'Contact'),
                  I()()()());
              },
            })),
            e
          );
        })(),
        N$ = (() => {
          class e {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = se({
              type: e,
              selectors: [['app-about']],
              decls: 61,
              vars: 0,
              consts: [
                [1, 'h2', 'article-title'],
                [1, 'about-text'],
                [1, 'service'],
                [1, 'h3', 'service-title'],
                [1, 'service-list'],
                [1, 'service-item'],
                [1, 'service-icon-box'],
                ['src', 'assets/images/icon-design.svg\n                ', 'alt', 'design icon', 'width', '40'],
                [1, 'service-content-box'],
                [1, 'h4', 'service-item-title'],
                [1, 'service-item-text'],
                ['src', 'assets/images/icon-dev.svg', 'alt', 'Web development icon', 'width', '40'],
                ['src', 'assets/images/icon-app.svg', 'alt', 'mobile app icon', 'width', '40'],
                ['src', 'assets/images/icon-photo.svg', 'alt', 'camera icon', 'width', '40'],
                ['data-modal-container', '', 1, 'modal-container'],
                ['data-overlay', '', 1, 'overlay'],
                [1, 'testimonials-modal'],
                ['data-modal-close-btn', '', 1, 'modal-close-btn'],
                ['name', 'close-outline'],
                [1, 'modal-img-wrapper'],
                [1, 'modal-avatar-box'],
                ['src', 'assets/images/avatar-1.png', 'alt', 'Daniel lewis', 'width', '80', 'data-modal-img', ''],
                ['src', 'assets/images/icon-quote.svg', 'alt', 'quote icon'],
                [1, 'modal-content'],
                ['data-modal-title', '', 1, 'h3', 'modal-title'],
                ['datetime', '2021-06-14'],
                ['data-modal-text', ''],
              ],
              template: function (t, r) {
                1 & t &&
                  (A(0, 'header')(1, 'h2', 0),
                  X(2, 'About me'),
                  I()(),
                  A(3, 'section', 1)(4, 'p'),
                  X(
                    5,
                    ' A highly skilled and versatile software engineer with extensive experience in developing, leading, and imple\x02menting innovative solutions across the insurance, education, healthcare, and logistics industries. Proficient in data structures and algorithms, full-stack development, cloud technologies, and DevOps, I am seeking a challenging role where I can leverage my technical expertise to drive organizational success and enhance customer satisfaction through efficient and user-friendly applications. Committed to continuous learning and professional development, with a strong foundation in computer applications and a passion for solving complex problems in dynamic environments. ',
                  ),
                  I(),
                  A(6, 'p'),
                  X(
                    7,
                    ' My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies. ',
                  ),
                  I()(),
                  A(8, 'section', 2)(9, 'h3', 3),
                  X(10, "What i'm doing"),
                  I(),
                  A(11, 'ul', 4)(12, 'li', 5)(13, 'div', 6),
                  Pe(14, 'img', 7),
                  I(),
                  A(15, 'div', 8)(16, 'h4', 9),
                  X(17, 'Web design'),
                  I(),
                  A(18, 'p', 10),
                  X(19, ' The most modern and high-quality design made at a professional level. '),
                  I()()(),
                  A(20, 'li', 5)(21, 'div', 6),
                  Pe(22, 'img', 11),
                  I(),
                  A(23, 'div', 8)(24, 'h4', 9),
                  X(25, 'Web development'),
                  I(),
                  A(26, 'p', 10),
                  X(27, ' High-quality development of sites at the professional level. '),
                  I()()(),
                  A(28, 'li', 5)(29, 'div', 6),
                  Pe(30, 'img', 12),
                  I(),
                  A(31, 'div', 8)(32, 'h4', 9),
                  X(33, 'Mobile apps'),
                  I(),
                  A(34, 'p', 10),
                  X(35, ' Professional development of applications for iOS and Android. '),
                  I()()(),
                  A(36, 'li', 5)(37, 'div', 6),
                  Pe(38, 'img', 13),
                  I(),
                  A(39, 'div', 8)(40, 'h4', 9),
                  X(41, 'Photography'),
                  I(),
                  A(42, 'p', 10),
                  X(43, ' I make high-quality photos of any category at a professional level. '),
                  I()()()()(),
                  A(44, 'div', 14),
                  Pe(45, 'div', 15),
                  A(46, 'section', 16)(47, 'button', 17),
                  Pe(48, 'ion-icon', 18),
                  I(),
                  A(49, 'div', 19)(50, 'figure', 20),
                  Pe(51, 'img', 21),
                  I(),
                  Pe(52, 'img', 22),
                  I(),
                  A(53, 'div', 23)(54, 'h4', 24),
                  X(55, 'Daniel lewis'),
                  I(),
                  A(56, 'time', 25),
                  X(57, '14 June, 2021'),
                  I(),
                  A(58, 'div', 26)(59, 'p'),
                  X(
                    60,
                    ' ashique was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia. ',
                  ),
                  I()()()()());
              },
              dependencies: [Ds],
            })),
            e
          );
        })();
      function L$(e, n) {
        if (
          (1 & e &&
            (A(0, 'li', 14)(1, 'div', 2)(2, 'h5', 15),
            X(3),
            I(),
            A(4, 'data', 16),
            X(5),
            I()(),
            A(6, 'div', 17),
            Pe(7, 'div', 18),
            I()()),
          2 & e)
        ) {
          const t = n.$implicit;
          bo(3), nf(t.name), bo(1), Xr('value', t.value), bo(1), Kl('', t.value, '%'), bo(2), ef('width', t.value, '%');
        }
      }
      let $$ = (() => {
          class e {
            constructor() {
              this.skills = [
                { name: 'Java', value: 70 },
                { name: 'Javascript', value: 70 },
                { name: 'Spring Boot', value: 70 },
                { name: 'Angular', value: 80 },
                { name: 'CSS', value: 80 },
                { name: 'Bootstrap', value: 80 },
                { name: 'UI Materials (Angular Material, Kendo, Ant UI, UIKit)', value: 80 },
                { name: 'Figma', value: 70 },
              ];
            }
            ngOnInit() {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = se({
              type: e,
              selectors: [['app-resume']],
              decls: 106,
              vars: 1,
              consts: [
                [1, 'h2', 'article-title'],
                [1, 'timeline'],
                [1, 'title-wrapper'],
                [1, 'icon-box'],
                ['name', 'book-outline'],
                [1, 'h3'],
                [1, 'timeline-list'],
                [1, 'timeline-item'],
                [1, 'h4', 'timeline-item-title'],
                [1, 'timeline-text'],
                [1, 'skill'],
                [1, 'h3', 'skills-title'],
                [1, 'skills-list', 'content-card'],
                ['class', 'skills-item', 4, 'ngFor', 'ngForOf'],
                [1, 'skills-item'],
                [1, 'h5'],
                [3, 'value'],
                [1, 'skill-progress-bg'],
                [1, 'skill-progress-fill'],
              ],
              template: function (t, r) {
                1 & t &&
                  (A(0, 'header')(1, 'h2', 0),
                  X(2, 'Resume'),
                  I()(),
                  A(3, 'section', 1)(4, 'div', 2)(5, 'div', 3),
                  Pe(6, 'ion-icon', 4),
                  I(),
                  A(7, 'h3', 5),
                  X(8, 'Education'),
                  I()(),
                  A(9, 'ol', 6)(10, 'li', 7)(11, 'h4', 8),
                  X(12, 'indira gandhi national open university'),
                  I(),
                  A(13, 'span'),
                  X(14, '2022 - Present'),
                  I(),
                  A(15, 'p', 9),
                  X(16, ' Master of Computer Applications. '),
                  I()(),
                  A(17, 'li', 7)(18, 'h4', 8),
                  X(19, 'University of Calicut'),
                  I(),
                  A(20, 'span'),
                  X(21, '2017 \u2014 2020'),
                  I(),
                  A(22, 'p', 9),
                  X(23, ' Bachelor of computer application '),
                  I()(),
                  A(24, 'li', 7)(25, 'h4', 8),
                  X(26, 'National Council of Educational Research and Training'),
                  I(),
                  A(27, 'span'),
                  X(28, '2015 \u2014 2017'),
                  I(),
                  A(29, 'p', 9),
                  X(30, ' Kerala Higher Secondary (HSE) '),
                  I()()()(),
                  A(31, 'section', 1)(32, 'div', 2)(33, 'div', 3),
                  Pe(34, 'ion-icon', 4),
                  I(),
                  A(35, 'h3', 5),
                  X(36, 'Experience'),
                  I()(),
                  A(37, 'ol', 6)(38, 'li', 7)(39, 'h4', 8),
                  X(40, 'Senior Software Engineer'),
                  I(),
                  A(41, 'span'),
                  X(42, 'Oct 2022 - Present'),
                  I(),
                  A(43, 'p', 9),
                  X(44, ' Allianz Technology '),
                  I()(),
                  A(45, 'li', 7)(46, 'h4', 8),
                  X(47, 'Front End Lead'),
                  I(),
                  A(48, 'span'),
                  X(49, 'Dec 2021 - Oct 2022'),
                  I(),
                  A(50, 'p', 9),
                  X(51, ' Cyspan Systems Pvt Ltd '),
                  I()(),
                  A(52, 'li', 7)(53, 'h4', 8),
                  X(54, 'Software Developer'),
                  I(),
                  A(55, 'span'),
                  X(56, 'Oct 2021 - Oct 2022'),
                  I(),
                  A(57, 'p', 9),
                  X(58, ' Cyspan Systems Pvt Ltd '),
                  I()(),
                  A(59, 'li', 7)(60, 'h4', 8),
                  X(61, 'Front End Lead'),
                  I(),
                  A(62, 'span'),
                  X(63, 'Jun 2021 - Oct 2021'),
                  I(),
                  A(64, 'p', 9),
                  X(65, ' Aspirom Technologies '),
                  I()(),
                  A(66, 'li', 7)(67, 'h4', 8),
                  X(68, 'Assitant Technical Lead'),
                  I(),
                  A(69, 'span'),
                  X(70, 'Jan 2021 - May 2021'),
                  I(),
                  A(71, 'p', 9),
                  X(72, ' Em.Mincetech Pvt Ltd '),
                  I()(),
                  A(73, 'li', 7)(74, 'h4', 8),
                  X(75, 'Full Stack Engineer (Angular + Strapi)'),
                  I(),
                  A(76, 'span'),
                  X(77, 'Aug 2020 - May 2021'),
                  I(),
                  A(78, 'p', 9),
                  X(79, ' Em.Mincetech Pvt Ltd '),
                  I()(),
                  A(80, 'li', 7)(81, 'h4', 8),
                  X(82, 'Strapi Developer'),
                  I(),
                  A(83, 'span'),
                  X(84, 'Jul 2020 - May 2021'),
                  I(),
                  A(85, 'p', 9),
                  X(
                    86,
                    ' Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur. ',
                  ),
                  I()(),
                  A(87, 'li', 7)(88, 'h4', 8),
                  X(89, 'Angular Developer'),
                  I(),
                  A(90, 'span'),
                  X(91, 'Jun 2020 - May 2021 '),
                  I(),
                  A(92, 'p', 9),
                  X(
                    93,
                    ' Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur. ',
                  ),
                  I()(),
                  A(94, 'li', 7)(95, 'h4', 8),
                  X(96, 'Angular Trainee'),
                  I(),
                  A(97, 'span'),
                  X(98, 'Dec 2019 - Feb 2020'),
                  I(),
                  A(99, 'p', 9),
                  X(100, ' Em.Mincetech \xb7 Part-time '),
                  I()()()(),
                  A(101, 'section', 10)(102, 'h3', 11),
                  X(103, 'My skills'),
                  I(),
                  A(104, 'ul', 12),
                  (function zl(e, n, t, r, o, i, s, a) {
                    const l = Y(),
                      c = lt(),
                      u = e + 22,
                      d = c.firstCreatePass
                        ? (function AM(e, n, t, r, o, i, s, a, l) {
                            const c = n.consts,
                              u = Ki(n, e, 4, s || null, vo(c, a));
                            Vd(n, t, u, vo(c, l)), ul(n, u);
                            const d = (u.tViews = $d(
                              2,
                              u,
                              r,
                              o,
                              i,
                              n.directiveRegistry,
                              n.pipeRegistry,
                              null,
                              n.schemas,
                              c,
                            ));
                            return (
                              null !== n.queries &&
                                (n.queries.template(n, u), (d.queries = n.queries.embeddedTView(u))),
                              u
                            );
                          })(u, c, l, n, t, r, o, i, s)
                        : c.data[u];
                    Sr(d, !1);
                    const g = l[11].createComment('');
                    Il(c, l, g, d),
                      an(g, l),
                      $l(l, (l[u] = iv(g, l, g, d))),
                      al(d) && Nd(c, l, d),
                      null != s && Ld(l, d, a);
                  })(105, L$, 8, 5, 'li', 13),
                  I()()),
                  2 & t && (bo(105), Xr('ngForOf', r.skills));
              },
              dependencies: [CD, Ds],
            })),
            e
          );
        })(),
        V$ = (() => {
          class e {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = se({
              type: e,
              selectors: [['app-portfolio']],
              decls: 121,
              vars: 0,
              consts: [
                [1, 'h2', 'article-title'],
                [1, 'projects'],
                [1, 'filter-list'],
                [1, 'filter-item'],
                ['data-filter-btn', '', 1, 'active'],
                ['data-filter-btn', ''],
                [1, 'filter-select-box'],
                ['data-select', '', 1, 'filter-select'],
                ['data-selecct-value', '', 1, 'select-value'],
                [1, 'select-icon'],
                ['name', 'chevron-down'],
                [1, 'select-list'],
                [1, 'select-item'],
                ['data-select-item', ''],
                [1, 'project-list'],
                ['data-filter-item', '', 'data-category', 'websites', 1, 'project-item', 'active'],
                ['href', '#'],
                [1, 'project-img'],
                [1, 'project-item-icon-box'],
                ['name', 'eye-outline'],
                ['src', 'assets/images/private site.jpg', 'alt', 'orizon', 'loading', 'lazy'],
                [1, 'project-title'],
                [1, 'project-category'],
                ['data-filter-item', '', 'data-category', 'applications', 1, 'project-item', 'active'],
                ['src', 'assets/images/private site.jpg', 'alt', 'brawlhalla', 'loading', 'lazy'],
              ],
              template: function (t, r) {
                1 & t &&
                  (A(0, 'header')(1, 'h2', 0),
                  X(2, 'Portfolio'),
                  I()(),
                  A(3, 'section', 1)(4, 'ul', 2)(5, 'li', 3)(6, 'button', 4),
                  X(7, 'All'),
                  I()(),
                  A(8, 'li', 3)(9, 'button', 5),
                  X(10, 'Applications'),
                  I()(),
                  A(11, 'li', 3)(12, 'button', 5),
                  X(13, 'Websites'),
                  I()()(),
                  A(14, 'div', 6)(15, 'button', 7)(16, 'div', 8),
                  X(17, 'Select category'),
                  I(),
                  A(18, 'div', 9),
                  Pe(19, 'ion-icon', 10),
                  I()(),
                  A(20, 'ul', 11)(21, 'li', 12)(22, 'button', 13),
                  X(23, 'All'),
                  I()(),
                  A(24, 'li', 12)(25, 'button', 13),
                  X(26, 'Applications'),
                  I()(),
                  A(27, 'li', 12)(28, 'button', 13),
                  X(29, 'Websites'),
                  I()()()(),
                  A(30, 'ul', 14)(31, 'li', 15)(32, 'a', 16)(33, 'figure', 17)(34, 'div', 18),
                  Pe(35, 'ion-icon', 19),
                  I(),
                  Pe(36, 'img', 20),
                  I(),
                  A(37, 'h3', 21),
                  X(38, 'Many Dynamic Websites'),
                  I(),
                  A(39, 'p', 22),
                  X(40, 'Website'),
                  I()()(),
                  A(41, 'li', 23)(42, 'a', 16)(43, 'figure', 17)(44, 'div', 18),
                  Pe(45, 'ion-icon', 19),
                  I(),
                  Pe(46, 'img', 24),
                  I(),
                  A(47, 'h3', 21),
                  X(48, 'Cargo Management'),
                  I(),
                  A(49, 'p', 22),
                  X(50, 'Applications'),
                  I()()(),
                  A(51, 'li', 23)(52, 'a', 16)(53, 'figure', 17)(54, 'div', 18),
                  Pe(55, 'ion-icon', 19),
                  I(),
                  Pe(56, 'img', 24),
                  I(),
                  A(57, 'h3', 21),
                  X(58, 'Cargo Management'),
                  I(),
                  A(59, 'p', 22),
                  X(60, 'Applications'),
                  I()()(),
                  A(61, 'li', 23)(62, 'a', 16)(63, 'figure', 17)(64, 'div', 18),
                  Pe(65, 'ion-icon', 19),
                  I(),
                  Pe(66, 'img', 24),
                  I(),
                  A(67, 'h3', 21),
                  X(68, 'Learning Management Systems'),
                  I(),
                  A(69, 'p', 22),
                  X(70, 'Applications'),
                  I()()(),
                  A(71, 'li', 23)(72, 'a', 16)(73, 'figure', 17)(74, 'div', 18),
                  Pe(75, 'ion-icon', 19),
                  I(),
                  Pe(76, 'img', 24),
                  I(),
                  A(77, 'h3', 21),
                  X(78, 'Business Performance Software'),
                  I(),
                  A(79, 'p', 22),
                  X(80, 'Applications'),
                  I()()(),
                  A(81, 'li', 23)(82, 'a', 16)(83, 'figure', 17)(84, 'div', 18),
                  Pe(85, 'ion-icon', 19),
                  I(),
                  Pe(86, 'img', 24),
                  I(),
                  A(87, 'h3', 21),
                  X(88, 'Hospital management system'),
                  I(),
                  A(89, 'p', 22),
                  X(90, 'Applications'),
                  I()()(),
                  A(91, 'li', 23)(92, 'a', 16)(93, 'figure', 17)(94, 'div', 18),
                  Pe(95, 'ion-icon', 19),
                  I(),
                  Pe(96, 'img', 24),
                  I(),
                  A(97, 'h3', 21),
                  X(98, 'Web Voting System'),
                  I(),
                  A(99, 'p', 22),
                  X(100, 'Applications'),
                  I()()(),
                  A(101, 'li', 23)(102, 'a', 16)(103, 'figure', 17)(104, 'div', 18),
                  Pe(105, 'ion-icon', 19),
                  I(),
                  Pe(106, 'img', 24),
                  I(),
                  A(107, 'h3', 21),
                  X(108, 'Game Show App'),
                  I(),
                  A(109, 'p', 22),
                  X(110, 'Applications'),
                  I()()(),
                  A(111, 'li', 23)(112, 'a', 16)(113, 'figure', 17)(114, 'div', 18),
                  Pe(115, 'ion-icon', 19),
                  I(),
                  Pe(116, 'img', 24),
                  I(),
                  A(117, 'h3', 21),
                  X(118, 'Psc Learning Apps'),
                  I(),
                  A(119, 'p', 22),
                  X(120, 'Applications'),
                  I()()()()());
              },
              dependencies: [Ds],
            })),
            e
          );
        })(),
        B$ = (() => {
          class e {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = se({
              type: e,
              selectors: [['app-contact']],
              decls: 18,
              vars: 0,
              consts: [
                [1, 'h2', 'article-title'],
                ['data-mapbox', '', 1, 'mapbox'],
                [
                  'src',
                  'https://maps.google.com/maps?width=600&height=400&hl=en&q=Manhaj Kundala&t=&z=14&ie=UTF8&iwloc=B&output=embed',
                  'width',
                  '400',
                  'height',
                  '300',
                  'loading',
                  'lazy',
                ],
                [1, 'contact-form'],
                [1, 'h3', 'form-title'],
                ['action', '#', 'data-form', '', 1, 'form'],
                [1, 'input-wrapper'],
                [
                  'type',
                  'text',
                  'name',
                  'fullname',
                  'placeholder',
                  'Full name',
                  'required',
                  '',
                  'data-form-input',
                  '',
                  1,
                  'form-input',
                ],
                [
                  'type',
                  'email',
                  'name',
                  'email',
                  'placeholder',
                  'Email address',
                  'required',
                  '',
                  'data-form-input',
                  '',
                  1,
                  'form-input',
                ],
                [
                  'name',
                  'message',
                  'placeholder',
                  'Your Message',
                  'required',
                  '',
                  'data-form-input',
                  '',
                  1,
                  'form-input',
                ],
                ['type', 'submit', 'disabled', '', 'data-form-btn', '', 1, 'form-btn'],
                ['name', 'paper-plane'],
              ],
              template: function (t, r) {
                1 & t &&
                  (A(0, 'header')(1, 'h2', 0),
                  X(2, 'Contact'),
                  I()(),
                  A(3, 'section', 1)(4, 'figure'),
                  Pe(5, 'iframe', 2),
                  I()(),
                  A(6, 'section', 3)(7, 'h3', 4),
                  X(8, 'Contact Form'),
                  I(),
                  A(9, 'form', 5)(10, 'div', 6),
                  Pe(11, 'input', 7)(12, 'input', 8),
                  I(),
                  Pe(13, 'textarea', 9),
                  A(14, 'button', 10),
                  Pe(15, 'ion-icon', 11),
                  A(16, 'span'),
                  X(17, 'Send Message'),
                  I()()()());
              },
              dependencies: [Ds],
            })),
            e
          );
        })(),
        j$ = (() => {
          class e {
            constructor() {
              this.title = 'my-portfolio';
            }
            ngOnInit() {
              const t = function (_t) {
                  _t.classList.toggle('active');
                },
                r = document.querySelector('[data-sidebar]');
              document.querySelector('[data-sidebar-btn]').addEventListener('click', function () {
                t(r);
              });
              const i = document.querySelectorAll('[data-testimonials-item]'),
                s = document.querySelector('[data-modal-container]'),
                a = document.querySelector('[data-modal-close-btn]'),
                l = document.querySelector('[data-overlay]'),
                c = document.querySelector('[data-modal-img]'),
                u = document.querySelector('[data-modal-title]'),
                d = document.querySelector('[data-modal-text]'),
                g = function () {
                  s.classList.toggle('active'), l.classList.toggle('active');
                };
              for (let _t = 0; _t < i.length; _t++)
                i[_t].addEventListener('click', function () {
                  (c.src = this.querySelector('[data-testimonials-avatar]').src),
                    (c.alt = this.querySelector('[data-testimonials-avatar]').alt),
                    (u.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML),
                    (d.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML),
                    g();
                });
              a.addEventListener('click', g), l.addEventListener('click', g);
              const y = document.querySelector('[data-select]'),
                w = document.querySelectorAll('[data-select-item]'),
                F = document.querySelector('[data-selecct-value]'),
                V = document.querySelectorAll('[data-filter-btn]');
              y.addEventListener('click', function () {
                t(this);
              });
              for (let _t = 0; _t < w.length; _t++)
                w[_t].addEventListener('click', function () {
                  let Lt = this.innerText.toLowerCase();
                  (F.innerText = this.innerText), t(y), ye(Lt);
                });
              const ie = document.querySelectorAll('[data-filter-item]'),
                ye = function (_t) {
                  for (let Lt = 0; Lt < ie.length; Lt++)
                    'all' === _t || _t === ie[Lt].dataset.category
                      ? ie[Lt].classList.add('active')
                      : ie[Lt].classList.remove('active');
                };
              let B = V[0];
              for (let _t = 0; _t < V.length; _t++)
                V[_t].addEventListener('click', function () {
                  let Lt = this.innerText.toLowerCase();
                  (F.innerText = this.innerText),
                    ye(Lt),
                    B.classList.remove('active'),
                    this.classList.add('active'),
                    (B = this);
                });
              const Oe = document.querySelector('[data-form]'),
                it = document.querySelectorAll('[data-form-input]'),
                Ct = document.querySelector('[data-form-btn]');
              for (let _t = 0; _t < it.length; _t++)
                it[_t].addEventListener('input', function () {
                  Oe.checkValidity() ? Ct.removeAttribute('disabled') : Ct.setAttribute('disabled', '');
                });
              const or = document.querySelectorAll('[data-nav-link]'),
                Ro = document.querySelectorAll('[data-page]');
              for (let _t = 0; _t < or.length; _t++)
                or[_t].addEventListener('click', function () {
                  for (let Lt = 0; Lt < Ro.length; Lt++)
                    this.innerHTML.toLowerCase() === Ro[Lt].dataset.page
                      ? (Ro[Lt].classList.add('active'), or[Lt].classList.add('active'), window.scrollTo(0, 0))
                      : (Ro[Lt].classList.remove('active'), or[Lt].classList.remove('active'));
                });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = se({
              type: e,
              selectors: [['app-root']],
              decls: 13,
              vars: 0,
              consts: [
                [1, 'main-content'],
                ['data-page', 'about', 1, 'about', 'active'],
                ['data-page', 'resume', 1, 'resume'],
                ['data-page', 'portfolio', 1, 'portfolio'],
                ['data-page', 'blog', 1, 'blog'],
                ['data-page', 'contact', 1, 'contact'],
              ],
              template: function (t, r) {
                1 & t &&
                  (A(0, 'main'),
                  Pe(1, 'app-sidebar'),
                  A(2, 'div', 0),
                  Pe(3, 'app-nav'),
                  A(4, 'article', 1),
                  Pe(5, 'app-about'),
                  I(),
                  A(6, 'article', 2),
                  Pe(7, 'app-resume'),
                  I(),
                  A(8, 'article', 3),
                  Pe(9, 'app-portfolio'),
                  I(),
                  Pe(10, 'article', 4),
                  A(11, 'article', 5),
                  Pe(12, 'app-contact'),
                  I()()());
              },
              dependencies: [P$, k$, N$, $$, V$, B$],
              styles: ['.blog-content[_ngcontent-%COMP%]{filter:blur(2px)}'],
            })),
            e
          );
        })(),
        H$ = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = jr({ type: e, bootstrap: [j$] })),
            (e.ɵinj = Er({ imports: [wR, O$, F$] })),
            e
          );
        })();
      (function WT() {
        K_ = !1;
      })(),
        bR()
          .bootstrapModule(H$)
          .catch((e) => console.error(e));
    },
    863: (qt, st, ae) => {
      var N = {
        './ion-accordion_2.entry.js': [9654, 8592, 9654],
        './ion-action-sheet.entry.js': [3648, 8592, 3648],
        './ion-alert.entry.js': [1118, 8592, 1118],
        './ion-app_8.entry.js': [53, 8592, 3236],
        './ion-avatar_3.entry.js': [4753, 4753],
        './ion-back-button.entry.js': [2073, 8592, 2073],
        './ion-backdrop.entry.js': [8939, 8939],
        './ion-breadcrumb_2.entry.js': [7544, 8592, 7544],
        './ion-button_2.entry.js': [5652, 5652],
        './ion-card_5.entry.js': [388, 388],
        './ion-checkbox.entry.js': [9922, 9922],
        './ion-chip.entry.js': [657, 657],
        './ion-col_3.entry.js': [9824, 9824],
        './ion-datetime-button.entry.js': [9230, 1435, 9230],
        './ion-datetime_3.entry.js': [4959, 1435, 8592, 4959],
        './ion-fab_3.entry.js': [5836, 8592, 5836],
        './ion-img.entry.js': [1033, 1033],
        './ion-infinite-scroll_2.entry.js': [8034, 8592, 5817],
        './ion-input.entry.js': [1217, 8592, 1217],
        './ion-item-option_3.entry.js': [2933, 8592, 4651],
        './ion-item_8.entry.js': [4711, 8592, 4711],
        './ion-loading.entry.js': [9434, 8592, 9434],
        './ion-menu_3.entry.js': [8136, 8592, 8136],
        './ion-modal.entry.js': [2349, 8592, 2349],
        './ion-nav_2.entry.js': [5349, 8592, 5349],
        './ion-picker-column-internal.entry.js': [7602, 8592, 7602],
        './ion-picker-internal.entry.js': [9016, 9016],
        './ion-popover.entry.js': [3804, 8592, 3804],
        './ion-progress-bar.entry.js': [4174, 4174],
        './ion-radio_2.entry.js': [4432, 4432],
        './ion-range.entry.js': [1709, 8592, 1709],
        './ion-refresher_2.entry.js': [3326, 8592, 2175],
        './ion-reorder_2.entry.js': [3583, 8592, 1186],
        './ion-ripple-effect.entry.js': [9958, 9958],
        './ion-route_4.entry.js': [4330, 4330],
        './ion-searchbar.entry.js': [8628, 8592, 8628],
        './ion-segment_2.entry.js': [9325, 8592, 9325],
        './ion-select_3.entry.js': [2773, 2773],
        './ion-slide_2.entry.js': [1650, 1650],
        './ion-spinner.entry.js': [4908, 8592, 4908],
        './ion-split-pane.entry.js': [9536, 9536],
        './ion-tab-bar_2.entry.js': [438, 8592, 438],
        './ion-tab_2.entry.js': [1536, 8592, 1536],
        './ion-text.entry.js': [4376, 4376],
        './ion-textarea.entry.js': [6560, 6560],
        './ion-toast.entry.js': [6120, 8592, 6120],
        './ion-toggle.entry.js': [5168, 8592, 5168],
        './ion-virtual-scroll.entry.js': [2289, 2289],
      };
      function ze(je) {
        if (!ae.o(N, je))
          return Promise.resolve().then(() => {
            var Ke = new Error("Cannot find module '" + je + "'");
            throw ((Ke.code = 'MODULE_NOT_FOUND'), Ke);
          });
        var qe = N[je],
          ke = qe[0];
        return Promise.all(qe.slice(1).map(ae.e)).then(() => ae(ke));
      }
      (ze.keys = () => Object.keys(N)), (ze.id = 863), (qt.exports = ze);
    },
    5861: (qt, st, ae) => {
      'use strict';
      function N(je, qe, ke, Ke, W, Ie, Ce) {
        try {
          var We = je[Ie](Ce),
            Ue = We.value;
        } catch (Ee) {
          return void ke(Ee);
        }
        We.done ? qe(Ue) : Promise.resolve(Ue).then(Ke, W);
      }
      function ze(je) {
        return function () {
          var qe = this,
            ke = arguments;
          return new Promise(function (Ke, W) {
            var Ie = je.apply(qe, ke);
            function Ce(Ue) {
              N(Ie, Ke, W, Ce, We, 'next', Ue);
            }
            function We(Ue) {
              N(Ie, Ke, W, Ce, We, 'throw', Ue);
            }
            Ce(void 0);
          });
        };
      }
      ae.d(st, { Z: () => ze });
    },
  },
  (qt) => {
    qt((qt.s = 5414));
  },
]);
