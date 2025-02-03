import './index.css'
import { useState } from 'react'
import heroIllustration from './assets/hero-illustration.svg'
import locationImage from './assets/images/location.webp'
import tungImage from './assets/images/tung.webp'
import duyanhImage from './assets/images/duyanh.webp'
import logoImage from './assets/images/logo.webp'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ 
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                overflow: 'hidden'
              }}>
                <img 
                  src={logoImage}
                  alt="DevEmpower Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
              <h2 className="gradient-text">DevEmpower</h2>
            </div>
            <button 
              className="mobile-nav-toggle" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className={isMenuOpen ? 'active' : ''}>
              <a 
                href="#business" 
                className="gradient-text" 
                style={{ textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}
                onClick={(e) => scrollToSection(e, 'business')}
              >
                ビジネス
              </a>
              <a 
                href="#company" 
                className="gradient-text" 
                style={{ textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}
                onClick={(e) => scrollToSection(e, 'company')}
              >
                会社情報
              </a>
              <a href="#" className="gradient-text" style={{ textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>ニュース</a>
              <a href="#" className="gradient-text" style={{ textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>ブログ</a>
              <a href="mailto:tungta@devempower.com" className="gradient-text" style={{ textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>問い合わせ</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div>
              <h1 style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Empower Your <span className="gradient-text">Development Journey</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              お客様のビジネスが成功するための最適な⾵⼒をご提供
              </p>
            </div>
            <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
              <img src={heroIllustration} alt="Hero Illustration" className="hero-image" />
            </div>
          </div>
          
          <div className="about-section" style={{ 
                marginTop: '4rem',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(79, 70, 229, 0.1) 100%)',
                borderRadius: '24px',
                padding: '3rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <h2 className="gradient-text" style={{ 
                  fontSize: '2.5rem', 
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}>
                  我々について
                </h2>
                <p className="about-text" style={{ 
                  fontSize: '1.2rem', 
                  color: 'var(--text-secondary)', 
                  lineHeight: '1.8',
                  maxWidth: '900px',
                  margin: '0 auto'
                }}>
                  ベトナムの⾸都、ハノイの⻄側の地域にオフィスをかまえております。このハノイ⻄部の地は、「ベトナムのシリコンバレー」と呼ばれ、ITの中⼼地として、スタートアップ企業が集まっています。⽇々最先端の情報が⾶び交い、優秀なエンジニアが集まってくる、⼤変活気のある地域です。この、エネルギー溢れる「エンジニアの街」で、お客様のビジネスをサポートさせていただいております。
                </p>
              </div>
        </div>
      </section>

      <section id="business" style={{ 
        padding: '4rem 0',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(79, 70, 229, 0.05) 100%)',
        borderTop: '1px solid rgba(99, 102, 241, 0.1)',
        borderBottom: '1px solid rgba(99, 102, 241, 0.1)'
      }}>
        <div className="container">
          <div className="business-content">
            {/* Left side - Text content */}
            <div className="business-text">
              <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                サービスについて
              </h2>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text)', marginBottom: '1.5rem' }}>
                最先端のデジタルビジネスを追求
              </h3>
              <p style={{ 
                fontSize: '1.2rem', 
                color: 'var(--text-secondary)', 
                lineHeight: '1.6'
              }}>
                開発者とクライアントの架け橋となり、相乗効果のあるパートナーシップを築き、アイデアを強力なソリューションへと変換し、イノベーションと成功を推進します。
              </p>
            </div>

            {/* Right side - SVG illustration */}
            <div className="business-image">
              <svg className="hero-image" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Circle */}
                <circle cx="200" cy="200" r="180" fill="#EEF2FF" opacity="0.3"/>
                
                {/* Need Circle */}
                <circle cx="120" cy="200" r="60" fill="#6366F1" opacity="0.9"/>
                <text x="120" y="205" textAnchor="middle" fill="white" fontSize="14">NEED</text>
                
                {/* Want Circle */}
                <circle cx="280" cy="200" r="60" fill="#4F46E5" opacity="0.9"/>
                <text x="280" y="205" textAnchor="middle" fill="white" fontSize="14">SOLUTION</text>
                
                {/* Connecting Bridge */}
                <path d="M180,200 L220,200" stroke="#A5B4FC" strokeWidth="4"/>
                
                {/* Connection Points */}
                <circle cx="200" cy="200" r="15" fill="#A5B4FC"/>
                
                {/* Flow Lines */}
                <path d="M140,170 Q200,140 260,170" stroke="#6366F1" strokeWidth="2" opacity="0.6"/>
                <path d="M140,230 Q200,260 260,230" stroke="#4F46E5" strokeWidth="2" opacity="0.6"/>
                
                {/* Pulse Animation */}
                <circle cx="200" cy="200" r="20" stroke="#6366F1" strokeWidth="2" opacity="0.5">
                  <animate
                    attributeName="r"
                    from="15"
                    to="30"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </div>

          {/* Feature cards below */}
          <div className="features-grid" style={{ marginTop: '0       ' }}>
            {[
              {
                title: 'システム開発',
                description: 'BtoC・BtoBのウエブシステム開発から、ECシステム、基幹系業務システム開発、 iOS/Androidアプリ開発、 お客様が求めるクオリティとビジネスモデルを具現化します。'
              },
              {
                title: 'ゲームFox',
                description: '企業ごとに特化したゲームマーケティングのパッケージを提供します。'
              },
              {
                title: 'IoT事業',
                description: 'IoT関連機器のハード設計からソフトウェアパッケージ開発までのSmartHome, Smart Deviceトータルソリューションを提供'
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <h3 style={{ marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="company" style={{ 
        padding: '4rem 0',
        background: 'var(--background)',
      }}>
        <div className="container">
        <div className="company-intro">
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
              Company Introduction
            </h2>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text)', marginBottom: '2rem', textAlign: 'center' }}>
              Our DNA
            </h3>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8',
              maxWidth: '900px',
              margin: '0 auto 4rem',
              textAlign: 'justify'
            }}>
              DevEmpowerでは、⾼い開発スキルを有したエンジニアを揃えており、優れた技術⼒が担保されておりますので、
              ⾼品質のシステム開発が可能です。そのうえで、お客様のプロジェクトが実現化し、成功するために、
              DevEmpowerではコミュニケーションルールを徹底管理しております。
              ⽇々、成果を最⼤化するコミュニケーションを追求し続けてきたことで、お客様の満⾜度向上、
              スタッフのモチベーション向上と⽣産性アップ、組織体制の強化、離職率の低下の実現に繋がっております。
            </p>

            <div className="communication-grid">
              <div className="comm-card">
                <div className="icon-container">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="#6366F1" opacity="0.1"/>
                    <path d="M12 20C12 16.13 15.13 13 19 13C22.87 13 26 16.13 26 20M19 25H19.01M28 20C28 25.52 23.52 30 18 30C12.48 30 8 25.52 8 20C8 14.48 12.48 10 18 10C23.52 10 28 14.48 28 20Z" 
                          stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  お客様に寄り添うコミュニケーション
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  いくら⾼い開発スキルがあっても、最適なコミュニケーションが⾏われていないと、お客様のイメージをきちんと理解して実現したり、ストレスフリーにプロジェクトを進めることは不可能です。
                  DevEmpower は、お客様の想いやビジネスなどの背景の理解、認識の擦り合わせやクイックレスポンス運⽤といった迅速かつ的確なコミュニケーションを強みとしておりますので、お客様には、「分かりやすい」、「助かる」と、⾼い評価と厚い信頼をいただいております。
                </p>
              </div>

              <div className="multiply-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M30 10L10 30M10 10L30 30" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              <div className="comm-card">
                <div className="icon-container">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="#4F46E5" opacity="0.1"/>
                    <path d="M14 26C14 24.9 14.9 24 16 24H24C25.1 24 26 24.9 26 26M24 16C24 18.21 22.21 20 20 20C17.79 20 16 18.21 16 16C16 13.79 17.79 12 20 12C22.21 12 24 13.79 24 16Z" 
                          stroke="#4F46E5" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  成果が最⼤化する社内コミュニケーション
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  DevEmpower は、ポジティブな気持ちで開発が進むからこそ、チームが⾼いパフォーマンスを発揮し、成果物も素晴らしいものになると信じております。
                  そのため、⼈の能⼒が最⼤限発揮されるマネジメント体制を社内に構築し、運⽤しています。
                  開発チームが前向きな職場環境でより⽣産性の⾼い仕事をして、チームの有する開発スキルや能⼒が最⼤化されることを強みとしております。
                </p>
              </div>
            </div>
          </div>
          <div className="company-info" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            marginTop: '4rem',
            alignItems: 'start'
          }}>
            <div className="company-details">
              <h2 style={{ 
                fontSize: '2.5rem',
                marginBottom: '0.5rem',
                color: 'var(--text)'
              }}>
                我々について
              </h2>
              <h3 style={{ 
                fontSize: '1.8rem',
                marginBottom: '2rem',
                color: 'var(--text-secondary)',
                fontWeight: 'normal'
              }}>
                About us
              </h3>
              <p style={{ 
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}>
                ベトナムの⾸都、ハノイの⻄側の地域にオフィスをかまえております。このハノイ⻄部の地は、「ベトナムのシリコンバレー」と呼ばれ、ITの中⼼地として、スタートアップ企業が集まっています。⽇々最先端の情報が⾶び交い、優秀なエンジニアが集まってくる、⼤変活気のある地域です。この、エネルギー溢れる「エンジニアの街」で、お客様のビジネスをサポートさせていただいております。
              </p>
              <div className="company-address" style={{
                display: 'grid',
                gap: '1rem',
                fontSize: '1rem',
                color: 'var(--text-secondary)'
              }}>
                <p><strong>会社名：</strong>DevEmpower Joint Stock Company</p>
                <p><strong>所在地：</strong>A1-1, A2-2 Le Duc Tho, My Dinh, Nam Tu Liem, Ha Noi</p>
                <p><strong>事業内容：</strong>オフショア開発、ゲームマーケティング、IoT設計・開発</p>
                <p><strong>創業：</strong>2020年3⽉</p>
                <p><strong>設⽴：</strong>2022年7⽉</p>
                <p><strong>代表取締役：</strong>チャン・アン・トゥン</p>
                <p><strong>従業員数：</strong>30名</p>
              </div>
            </div>
            <div className="company-image" style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
            }}>
              <img 
                src={locationImage} 
                alt="DevEmpower Office Location" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          </div>
          <div className="company-bod" style={{
            marginTop: '6rem',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              marginBottom: '0.5rem',
              color: 'var(--text)'
            }}>
              コアメンバー
            </h2>
            <h3 style={{ 
              fontSize: '1.8rem',
              marginBottom: '4rem',
              color: 'var(--text-secondary)',
              fontWeight: 'normal'
            }}>
              Management Team
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8rem',
              maxWidth: '1400px',
              margin: '0 auto'
            }}>
              {/* CEO Profile */}
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '2rem',
                  margin: '0 auto 2rem'
                }}>
                  <img 
                    src={tungImage} 
                    alt="CEO - Tran Anh Tung" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>CEO</h4>
                <p style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '0.25rem',
                  color: 'var(--text)'
                }}>
                  チャン アン トゥン
                </p>
                <p style={{ 
                  fontSize: '1rem', 
                  marginBottom: '1.5rem',
                  color: 'var(--text-secondary)'
                }}>
                  Tran Anh Tung
                </p>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h5 style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '0.5rem',
                    color: 'var(--text)'
                  }}>得意分野</h5>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Java,　セキュリティ製品PMO, プロセス改善
                  </p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h5 style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '0.5rem',
                    color: 'var(--text)'
                  }}>経歴</h5>
                  <div style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    <p>・2020~：DevEmpower 立ち上げ</p>
                    <p>・2015~2020：双日株式会社</p>
                    <p>・ハノイ⼯科⼤学卒業</p>
                    <p style={{ marginTop: '0.5rem' }}>
                      ブリッジSEとして複数の⽇本企業とのプロジェクトを経験。要件定義、設計、プロジェクトマネージャーとして複数案件に従事。
                    </p>
                  </div>
                </div>
                <div>
                  <h5 style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '0.5rem',
                    color: 'var(--text)'
                  }}>趣味</h5>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    改善活動、ゲーム
                  </p>
                </div>
              </div>

              {/* CTO Profile */}
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '2rem',
                  margin: '0 auto 2rem'
                }}>
                  <img 
                    src={duyanhImage} 
                    alt="CTO - Ta Duy Anh" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>CTO</h4>
                <p style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '0.25rem',
                  color: 'var(--text)'
                }}>
                  ター ズイ アイン
                </p>
                <p style={{ 
                  fontSize: '1rem', 
                  marginBottom: '1.5rem',
                  color: 'var(--text-secondary)'
                }}>
                  Ta Duy Anh
                </p>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h5 style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '0.5rem',
                    color: 'var(--text)'
                  }}>得意分野</h5>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    全ての技術(バックエンド、フロントエンド、スマホアプリ、インフラ、etc...)
                  </p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h5 style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '0.5rem',
                    color: 'var(--text)'
                  }}>経歴</h5>
                  <div style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    <p>・2019~2021：業務委託</p>
                    <p>・2015~2019：株式会社Sun*</p>
                    <p>・ハノイ⼯科⼤学卒業</p>
                    <p style={{ marginTop: '0.5rem' }}>
                      フルスタックエンジニアとして多くの技術（フロントエンド、バックエンド、モバイル、インフラ）を経験。テックリード、ブリッジSEプロジェクトマネージャーとして⽇本企業のプロジェクトに従事。
                    </p>
                  </div>
                </div>
                <div>
                  <h5 style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '0.5rem',
                    color: 'var(--text)'
                  }}>趣味</h5>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    新しいことへの挑戦、読書、ゲーム
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{
        borderTop: '1px solid rgba(99, 102, 241, 0.1)',
        padding: '2rem 0',
        background: 'var(--background)'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ 
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                overflow: 'hidden'
              }}>
                <img 
                  src={logoImage}
                  alt="DevEmpower Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a 
                href="#business" 
                style={{ 
                  textDecoration: 'none', 
                  color: 'var(--text)',
                  fontSize: '0.9rem'
                }}
                onClick={(e) => scrollToSection(e, 'business')}
              >
                ビジネス
              </a>
              <a 
                href="#company" 
                style={{ 
                  textDecoration: 'none', 
                  color: 'var(--text)',
                  fontSize: '0.9rem'
                }}
                onClick={(e) => scrollToSection(e, 'company')}
              >
                会社情報
              </a>
              <a href="#" style={{ textDecoration: 'none', color: 'var(--text)', fontSize: '0.9rem' }}>ニュース</a>
              <a href="#" style={{ textDecoration: 'none', color: 'var(--text)', fontSize: '0.9rem' }}>ブログ</a>
              <a href="mailto:tungta@devempower.com" style={{ textDecoration: 'none', color: 'var(--text)', fontSize: '0.9rem' }}>問い合わせ</a>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--text)', opacity: 0.8 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"/>
                </svg>
              </a>
              <a href="#" style={{ color: 'var(--text)', opacity: 0.8 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(99, 102, 241, 0.1)',
            paddingTop: '1rem',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
          }}>
            ©2022 DevEmpower LLC
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
