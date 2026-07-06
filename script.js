/* =========================================================================
   UMEP — Suspended in Light (Monochrome edition)
   ---------------------------------------------------------------------------
   - Build a justified photo grid (Flickr-style row layout).
   - Aspect ratios preserved exactly from source data.
   - Lightbox with keyboard navigation and metadata caption.
   - Smooth-scroll anchor links + FormSubmit contact-form guard.
   ========================================================================= */

(() => {
  /* -----------------------------------------------------------------------
     1. Show-wide metadata (shared by every photo)
     ----------------------------------------------------------------------- */
  const SHOW = {
    title:    '20260125如月千早武道館単独公演「OathONE」',
    subtitle: 'Live Photography · Solo Concert',
    tag:      'Live',
    desc:     'Kisaragi Chihaya solo concert at Nippon Budokan, January 25, 2026.',
    descJa:   '如月千早 日本武道館単独公演「OathONE」 — 2026年1月25日。',
    credit:   '© UMEP',
  };

  /* -----------------------------------------------------------------------
     2. Photo files with aspect ratios (508 entries)
     ----------------------------------------------------------------------- */
  const PHOTO_FILES = [
    { id: 'UME_4118', a: 1.5, idx: '001 / 508' },
    { id: 'UME_4122', a: 1.5, idx: '002 / 508' },
    { id: 'UME_4123', a: 1.5, idx: '003 / 508' },
    { id: 'UME_4128', a: 1.5, idx: '004 / 508' },
    { id: 'UME_4131', a: 1.5, idx: '005 / 508' },
    { id: 'UME_4132', a: 1.5, idx: '006 / 508' },
    { id: 'UME_4133', a: 1.5, idx: '007 / 508' },
    { id: 'UME_4138', a: 1.5, idx: '008 / 508' },
    { id: 'UME_4141', a: 1.5, idx: '009 / 508' },
    { id: 'UME_4143', a: 1.5, idx: '010 / 508' },
    { id: 'UME_4147', a: 1.5, idx: '011 / 508' },
    { id: 'UME_4151', a: 1.5, idx: '012 / 508' },
    { id: 'UME_4155', a: 0.667, idx: '013 / 508' },
    { id: 'UME_4158', a: 0.667, idx: '014 / 508' },
    { id: 'UME_4163', a: 0.667, idx: '015 / 508' },
    { id: 'UME_4165', a: 0.667, idx: '016 / 508' },
    { id: 'UME_4168', a: 0.667, idx: '017 / 508' },
    { id: 'UME_4177', a: 0.667, idx: '018 / 508' },
    { id: 'UME_4180', a: 0.667, idx: '019 / 508' },
    { id: 'UME_4188', a: 1.5, idx: '020 / 508' },
    { id: 'UME_4191', a: 1.5, idx: '021 / 508' },
    { id: 'UME_4193', a: 1.5, idx: '022 / 508' },
    { id: 'UME_4197', a: 1.5, idx: '023 / 508' },
    { id: 'UME_4202', a: 1.5, idx: '024 / 508' },
    { id: 'UME_4204', a: 1.5, idx: '025 / 508' },
    { id: 'UME_4208', a: 1.5, idx: '026 / 508' },
    { id: 'UME_4211', a: 1.5, idx: '027 / 508' },
    { id: 'UME_4214', a: 1.5, idx: '028 / 508' },
    { id: 'UME_4216', a: 1.5, idx: '029 / 508' },
    { id: 'UME_4218', a: 1.5, idx: '030 / 508' },
    { id: 'UME_4221', a: 1.5, idx: '031 / 508' },
    { id: 'UME_4222', a: 1.5, idx: '032 / 508' },
    { id: 'UME_4223', a: 1.5, idx: '033 / 508' },
    { id: 'UME_4227', a: 0.667, idx: '034 / 508' },
    { id: 'UME_4228', a: 0.667, idx: '035 / 508' },
    { id: 'UME_4233', a: 1.5, idx: '036 / 508' },
    { id: 'UME_4235', a: 1.5, idx: '037 / 508' },
    { id: 'UME_4236', a: 1.5, idx: '038 / 508' },
    { id: 'UME_4237', a: 1.5, idx: '039 / 508' },
    { id: 'UME_4239', a: 1.5, idx: '040 / 508' },
    { id: 'UME_4241', a: 1.5, idx: '041 / 508' },
    { id: 'UME_4247', a: 1.5, idx: '042 / 508' },
    { id: 'UME_4252', a: 1.5, idx: '043 / 508' },
    { id: 'UME_4255', a: 1.5, idx: '044 / 508' },
    { id: 'UME_4262', a: 1.5, idx: '045 / 508' },
    { id: 'UME_4263', a: 1.5, idx: '046 / 508' },
    { id: 'UME_4273', a: 1.5, idx: '047 / 508' },
    { id: 'UME_4274', a: 1.5, idx: '048 / 508' },
    { id: 'UME_4275', a: 1.5, idx: '049 / 508' },
    { id: 'UME_4276', a: 1.5, idx: '050 / 508' },
    { id: 'UME_4279', a: 1.5, idx: '051 / 508' },
    { id: 'UME_4285', a: 0.667, idx: '052 / 508' },
    { id: 'UME_4290', a: 0.667, idx: '053 / 508' },
    { id: 'UME_4295', a: 1.5, idx: '054 / 508' },
    { id: 'UME_4299', a: 1.5, idx: '055 / 508' },
    { id: 'UME_4301', a: 1.5, idx: '056 / 508' },
    { id: 'UME_4302', a: 1.5, idx: '057 / 508' },
    { id: 'UME_4303', a: 1.5, idx: '058 / 508' },
    { id: 'UME_4315', a: 1.5, idx: '059 / 508' },
    { id: 'UME_4316', a: 1.5, idx: '060 / 508' },
    { id: 'UME_4317', a: 1.5, idx: '061 / 508' },
    { id: 'UME_4318', a: 1.5, idx: '062 / 508' },
    { id: 'UME_4320', a: 1.5, idx: '063 / 508' },
    { id: 'UME_4322', a: 1.5, idx: '064 / 508' },
    { id: 'UME_4332', a: 1.5, idx: '065 / 508' },
    { id: 'UME_4333', a: 1.5, idx: '066 / 508' },
    { id: 'UME_4342', a: 1.5, idx: '067 / 508' },
    { id: 'UME_4343', a: 1.5, idx: '068 / 508' },
    { id: 'UME_4344', a: 1.5, idx: '069 / 508' },
    { id: 'UME_4345', a: 1.5, idx: '070 / 508' },
    { id: 'UME_4346', a: 1.5, idx: '071 / 508' },
    { id: 'UME_4351', a: 1.5, idx: '072 / 508' },
    { id: 'UME_4352', a: 1.5, idx: '073 / 508' },
    { id: 'UME_4353', a: 1.5, idx: '074 / 508' },
    { id: 'UME_4354', a: 1.5, idx: '075 / 508' },
    { id: 'UME_4355', a: 1.5, idx: '076 / 508' },
    { id: 'UME_4356', a: 1.5, idx: '077 / 508' },
    { id: 'UME_4357', a: 1.5, idx: '078 / 508' },
    { id: 'UME_4359', a: 1.5, idx: '079 / 508' },
    { id: 'UME_4363', a: 1.5, idx: '080 / 508' },
    { id: 'UME_4366', a: 1.5, idx: '081 / 508' },
    { id: 'UME_4367', a: 1.5, idx: '082 / 508' },
    { id: 'UME_4369', a: 1.5, idx: '083 / 508' },
    { id: 'UME_4370', a: 1.5, idx: '084 / 508' },
    { id: 'UME_4372', a: 0.667, idx: '085 / 508' },
    { id: 'UME_4373', a: 0.667, idx: '086 / 508' },
    { id: 'UME_4374', a: 0.667, idx: '087 / 508' },
    { id: 'UME_4385', a: 0.667, idx: '088 / 508' },
    { id: 'UME_4389', a: 0.667, idx: '089 / 508' },
    { id: 'UME_4396', a: 0.667, idx: '090 / 508' },
    { id: 'UME_4398', a: 0.667, idx: '091 / 508' },
    { id: 'UME_4399', a: 0.667, idx: '092 / 508' },
    { id: 'UME_4407', a: 1.5, idx: '093 / 508' },
    { id: 'UME_4411', a: 1.5, idx: '094 / 508' },
    { id: 'UME_4413', a: 1.5, idx: '095 / 508' },
    { id: 'UME_4414', a: 1.5, idx: '096 / 508' },
    { id: 'UME_4417', a: 1.5, idx: '097 / 508' },
    { id: 'UME_4423', a: 1.5, idx: '098 / 508' },
    { id: 'UME_4425', a: 1.5, idx: '099 / 508' },
    { id: 'UME_4426', a: 1.5, idx: '100 / 508' },
    { id: 'UME_4427', a: 1.5, idx: '101 / 508' },
    { id: 'UME_4430', a: 1.5, idx: '102 / 508' },
    { id: 'UME_4431', a: 1.5, idx: '103 / 508' },
    { id: 'UME_4438', a: 1.5, idx: '104 / 508' },
    { id: 'UME_4439', a: 1.5, idx: '105 / 508' },
    { id: 'UME_4440', a: 1.5, idx: '106 / 508' },
    { id: 'UME_4441', a: 1.5, idx: '107 / 508' },
    { id: 'UME_4442', a: 1.5, idx: '108 / 508' },
    { id: 'UME_4443', a: 1.5, idx: '109 / 508' },
    { id: 'UME_4445', a: 1.5, idx: '110 / 508' },
    { id: 'UME_4448', a: 1.5, idx: '111 / 508' },
    { id: 'UME_4450', a: 1.5, idx: '112 / 508' },
    { id: 'UME_4452', a: 1.5, idx: '113 / 508' },
    { id: 'UME_4458', a: 1.5, idx: '114 / 508' },
    { id: 'UME_4459', a: 1.5, idx: '115 / 508' },
    { id: 'UME_4460', a: 1.5, idx: '116 / 508' },
    { id: 'UME_4463', a: 1.5, idx: '117 / 508' },
    { id: 'UME_4464', a: 1.5, idx: '118 / 508' },
    { id: 'UME_4470', a: 1.5, idx: '119 / 508' },
    { id: 'UME_4473', a: 1.5, idx: '120 / 508' },
    { id: 'UME_4475', a: 1.5, idx: '121 / 508' },
    { id: 'UME_4476', a: 1.5, idx: '122 / 508' },
    { id: 'UME_4477', a: 1.5, idx: '123 / 508' },
    { id: 'UME_4478', a: 1.5, idx: '124 / 508' },
    { id: 'UME_4479', a: 1.5, idx: '125 / 508' },
    { id: 'UME_4480', a: 1.5, idx: '126 / 508' },
    { id: 'UME_4487', a: 1.5, idx: '127 / 508' },
    { id: 'UME_4497', a: 1.5, idx: '128 / 508' },
    { id: 'UME_4504', a: 1.5, idx: '129 / 508' },
    { id: 'UME_4508', a: 1.5, idx: '130 / 508' },
    { id: 'UME_4510', a: 1.5, idx: '131 / 508' },
    { id: 'UME_4515', a: 1.5, idx: '132 / 508' },
    { id: 'UME_4518', a: 1.5, idx: '133 / 508' },
    { id: 'UME_4524', a: 1.5, idx: '134 / 508' },
    { id: 'UME_4526', a: 1.5, idx: '135 / 508' },
    { id: 'UME_4528', a: 1.5, idx: '136 / 508' },
    { id: 'UME_4530', a: 1.5, idx: '137 / 508' },
    { id: 'UME_4531', a: 1.5, idx: '138 / 508' },
    { id: 'UME_4534', a: 1.5, idx: '139 / 508' },
    { id: 'UME_4536', a: 1.5, idx: '140 / 508' },
    { id: 'UME_4540', a: 1.5, idx: '141 / 508' },
    { id: 'UME_4543', a: 1.5, idx: '142 / 508' },
    { id: 'UME_4546', a: 1.5, idx: '143 / 508' },
    { id: 'UME_4550', a: 1.5, idx: '144 / 508' },
    { id: 'UME_4553', a: 1.5, idx: '145 / 508' },
    { id: 'UME_4562', a: 1.5, idx: '146 / 508' },
    { id: 'UME_4568', a: 1.5, idx: '147 / 508' },
    { id: 'UME_4570', a: 1.5, idx: '148 / 508' },
    { id: 'UME_4572', a: 1.5, idx: '149 / 508' },
    { id: 'UME_4583', a: 1.5, idx: '150 / 508' },
    { id: 'UME_4584', a: 1.5, idx: '151 / 508' },
    { id: 'UME_4590', a: 1.5, idx: '152 / 508' },
    { id: 'UME_4592', a: 1.5, idx: '153 / 508' },
    { id: 'UME_4597', a: 1.5, idx: '154 / 508' },
    { id: 'UME_4603', a: 1.5, idx: '155 / 508' },
    { id: 'UME_4617', a: 1.5, idx: '156 / 508' },
    { id: 'UME_4626', a: 1.5, idx: '157 / 508' },
    { id: 'UME_4634', a: 1.5, idx: '158 / 508' },
    { id: 'UME_4638', a: 1.5, idx: '159 / 508' },
    { id: 'UME_4643', a: 1.5, idx: '160 / 508' },
    { id: 'UME_4650', a: 1.5, idx: '161 / 508' },
    { id: 'UME_4653', a: 1.5, idx: '162 / 508' },
    { id: 'UME_4656', a: 1.5, idx: '163 / 508' },
    { id: 'UME_4662', a: 1.5, idx: '164 / 508' },
    { id: 'UME_4666', a: 1.5, idx: '165 / 508' },
    { id: 'UME_4668', a: 1.5, idx: '166 / 508' },
    { id: 'UME_4669', a: 1.5, idx: '167 / 508' },
    { id: 'UME_4673', a: 1.5, idx: '168 / 508' },
    { id: 'UME_4681', a: 1.5, idx: '169 / 508' },
    { id: 'UME_4685', a: 1.5, idx: '170 / 508' },
    { id: 'UME_4691', a: 1.5, idx: '171 / 508' },
    { id: 'UME_4695', a: 1.5, idx: '172 / 508' },
    { id: 'UME_4701', a: 1.5, idx: '173 / 508' },
    { id: 'UME_4711', a: 1.5, idx: '174 / 508' },
    { id: 'UME_4713', a: 1.5, idx: '175 / 508' },
    { id: 'UME_4720', a: 1.5, idx: '176 / 508' },
    { id: 'UME_4723', a: 1.5, idx: '177 / 508' },
    { id: 'UME_4727', a: 1.5, idx: '178 / 508' },
    { id: 'UME_4728', a: 1.5, idx: '179 / 508' },
    { id: 'UME_4735', a: 1.5, idx: '180 / 508' },
    { id: 'UME_4736', a: 1.5, idx: '181 / 508' },
    { id: 'UME_4739', a: 1.5, idx: '182 / 508' },
    { id: 'UME_4740', a: 1.5, idx: '183 / 508' },
    { id: 'UME_4754', a: 1.5, idx: '184 / 508' },
    { id: 'UME_4771', a: 1.5, idx: '185 / 508' },
    { id: 'UME_4779', a: 1.5, idx: '186 / 508' },
    { id: 'UME_4785', a: 1.5, idx: '187 / 508' },
    { id: 'UME_4787', a: 1.5, idx: '188 / 508' },
    { id: 'UME_4788', a: 1.5, idx: '189 / 508' },
    { id: 'UME_4789', a: 1.5, idx: '190 / 508' },
    { id: 'UME_4790', a: 0.667, idx: '191 / 508' },
    { id: 'UME_4795', a: 0.667, idx: '192 / 508' },
    { id: 'UME_4806', a: 1.5, idx: '193 / 508' },
    { id: 'UME_4811', a: 1.5, idx: '194 / 508' },
    { id: 'UME_4814', a: 1.5, idx: '195 / 508' },
    { id: 'UME_4820', a: 1.5, idx: '196 / 508' },
    { id: 'UME_4824', a: 1.5, idx: '197 / 508' },
    { id: 'UME_4831', a: 1.5, idx: '198 / 508' },
    { id: 'UME_4835', a: 1.5, idx: '199 / 508' },
    { id: 'UME_4838', a: 1.5, idx: '200 / 508' },
    { id: 'UME_4841', a: 1.5, idx: '201 / 508' },
    { id: 'UME_4846', a: 1.5, idx: '202 / 508' },
    { id: 'UME_4848', a: 1.5, idx: '203 / 508' },
    { id: 'UME_4850', a: 1.5, idx: '204 / 508' },
    { id: 'UME_4856', a: 1.5, idx: '205 / 508' },
    { id: 'UME_4861', a: 1.5, idx: '206 / 508' },
    { id: 'UME_4863', a: 1.5, idx: '207 / 508' },
    { id: 'UME_4868', a: 1.5, idx: '208 / 508' },
    { id: 'UME_4869', a: 1.5, idx: '209 / 508' },
    { id: 'UME_4871', a: 1.5, idx: '210 / 508' },
    { id: 'UME_4882', a: 1.5, idx: '211 / 508' },
    { id: 'UME_4886', a: 1.5, idx: '212 / 508' },
    { id: 'UME_4896', a: 1.5, idx: '213 / 508' },
    { id: 'UME_4900', a: 1.5, idx: '214 / 508' },
    { id: 'UME_4903', a: 1.5, idx: '215 / 508' },
    { id: 'UME_4907', a: 1.5, idx: '216 / 508' },
    { id: 'UME_4916', a: 1.5, idx: '217 / 508' },
    { id: 'UME_4920', a: 1.5, idx: '218 / 508' },
    { id: 'UME_4928', a: 1.5, idx: '219 / 508' },
    { id: 'UME_4929', a: 1.5, idx: '220 / 508' },
    { id: 'UME_4941', a: 1.5, idx: '221 / 508' },
    { id: 'UME_4942', a: 1.5, idx: '222 / 508' },
    { id: 'UME_4943', a: 1.5, idx: '223 / 508' },
    { id: 'UME_4944', a: 1.5, idx: '224 / 508' },
    { id: 'UME_4947', a: 1.5, idx: '225 / 508' },
    { id: 'UME_4951', a: 1.5, idx: '226 / 508' },
    { id: 'UME_4955', a: 1.5, idx: '227 / 508' },
    { id: 'UME_4957', a: 1.5, idx: '228 / 508' },
    { id: 'UME_4959', a: 1.5, idx: '229 / 508' },
    { id: 'UME_4963', a: 1.5, idx: '230 / 508' },
    { id: 'UME_4965', a: 1.5, idx: '231 / 508' },
    { id: 'UME_4976', a: 0.667, idx: '232 / 508' },
    { id: 'UME_4977', a: 0.667, idx: '233 / 508' },
    { id: 'UME_4984', a: 0.667, idx: '234 / 508' },
    { id: 'UME_4990', a: 0.667, idx: '235 / 508' },
    { id: 'UME_4991', a: 1.5, idx: '236 / 508' },
    { id: 'UME_4992', a: 1.5, idx: '237 / 508' },
    { id: 'UME_4993', a: 1.5, idx: '238 / 508' },
    { id: 'UME_4994', a: 1.5, idx: '239 / 508' },
    { id: 'UME_4995', a: 1.5, idx: '240 / 508' },
    { id: 'UME_4996', a: 1.5, idx: '241 / 508' },
    { id: 'UME_4997', a: 1.5, idx: '242 / 508' },
    { id: 'UME_5001', a: 1.5, idx: '243 / 508' },
    { id: 'UME_5002', a: 1.5, idx: '244 / 508' },
    { id: 'UME_5008', a: 1.5, idx: '245 / 508' },
    { id: 'UME_5009', a: 1.5, idx: '246 / 508' },
    { id: 'UME_5013', a: 1.5, idx: '247 / 508' },
    { id: 'UME_5018', a: 1.5, idx: '248 / 508' },
    { id: 'UME_5023', a: 1.5, idx: '249 / 508' },
    { id: 'UME_5028', a: 1.5, idx: '250 / 508' },
    { id: 'UME_5029', a: 1.5, idx: '251 / 508' },
    { id: 'UME_5042', a: 1.5, idx: '252 / 508' },
    { id: 'UME_5049', a: 1.5, idx: '253 / 508' },
    { id: 'UME_5056', a: 1.5, idx: '254 / 508' },
    { id: 'UME_5058', a: 1.5, idx: '255 / 508' },
    { id: 'UME_5059', a: 1.5, idx: '256 / 508' },
    { id: 'UME_5060', a: 1.5, idx: '257 / 508' },
    { id: 'UME_5061', a: 1.5, idx: '258 / 508' },
    { id: 'UME_5062', a: 1.5, idx: '259 / 508' },
    { id: 'UME_5066', a: 1.5, idx: '260 / 508' },
    { id: 'UME_5069', a: 1.5, idx: '261 / 508' },
    { id: 'UME_5075', a: 1.5, idx: '262 / 508' },
    { id: 'UME_5077', a: 1.5, idx: '263 / 508' },
    { id: 'UME_5087', a: 1.5, idx: '264 / 508' },
    { id: 'UME_5090', a: 1.5, idx: '265 / 508' },
    { id: 'UME_5098', a: 0.667, idx: '266 / 508' },
    { id: 'UME_5099', a: 0.667, idx: '267 / 508' },
    { id: 'UME_5103', a: 0.667, idx: '268 / 508' },
    { id: 'UME_5105', a: 1.5, idx: '269 / 508' },
    { id: 'UME_5107', a: 1.5, idx: '270 / 508' },
    { id: 'UME_5108', a: 1.5, idx: '271 / 508' },
    { id: 'UME_5110', a: 1.5, idx: '272 / 508' },
    { id: 'UME_5112', a: 1.5, idx: '273 / 508' },
    { id: 'UME_5113', a: 0.667, idx: '274 / 508' },
    { id: 'UME_5118', a: 1.5, idx: '275 / 508' },
    { id: 'UME_5121', a: 1.5, idx: '276 / 508' },
    { id: 'UME_5131', a: 0.667, idx: '277 / 508' },
    { id: 'UME_5132', a: 1.5, idx: '278 / 508' },
    { id: 'UME_5133', a: 1.5, idx: '279 / 508' },
    { id: 'UME_5138', a: 1.5, idx: '280 / 508' },
    { id: 'UME_5144', a: 1.5, idx: '281 / 508' },
    { id: 'UME_5146', a: 1.5, idx: '282 / 508' },
    { id: 'UME_5147', a: 0.667, idx: '283 / 508' },
    { id: 'UME_5148', a: 0.667, idx: '284 / 508' },
    { id: 'UME_5150', a: 0.667, idx: '285 / 508' },
    { id: 'UME_5157', a: 1.5, idx: '286 / 508' },
    { id: 'UME_5158', a: 1.5, idx: '287 / 508' },
    { id: 'UME_5163', a: 1.5, idx: '288 / 508' },
    { id: 'UME_5164', a: 1.5, idx: '289 / 508' },
    { id: 'UME_5168', a: 1.5, idx: '290 / 508' },
    { id: 'UME_5169', a: 1.5, idx: '291 / 508' },
    { id: 'UME_5171', a: 1.5, idx: '292 / 508' },
    { id: 'UME_5172', a: 0.667, idx: '293 / 508' },
    { id: 'UME_5176', a: 0.667, idx: '294 / 508' },
    { id: 'UME_5178', a: 0.667, idx: '295 / 508' },
    { id: 'UME_5180', a: 1.5, idx: '296 / 508' },
    { id: 'UME_5182', a: 1.5, idx: '297 / 508' },
    { id: 'UME_5183', a: 1.5, idx: '298 / 508' },
    { id: 'UME_5186', a: 1.5, idx: '299 / 508' },
    { id: 'UME_5194', a: 1.5, idx: '300 / 508' },
    { id: 'UME_5196', a: 1.5, idx: '301 / 508' },
    { id: 'UME_5197', a: 1.5, idx: '302 / 508' },
    { id: 'UME_5202', a: 1.5, idx: '303 / 508' },
    { id: 'UME_5210', a: 1.5, idx: '304 / 508' },
    { id: 'UME_5213', a: 1.5, idx: '305 / 508' },
    { id: 'UME_5214', a: 1.5, idx: '306 / 508' },
    { id: 'UME_5215', a: 1.5, idx: '307 / 508' },
    { id: 'UME_5216', a: 1.501, idx: '308 / 508' },
    { id: 'UME_5218', a: 1.5, idx: '309 / 508' },
    { id: 'UME_5224', a: 1.5, idx: '310 / 508' },
    { id: 'UME_5227', a: 1.5, idx: '311 / 508' },
    { id: 'UME_5228', a: 1.5, idx: '312 / 508' },
    { id: 'UME_5229', a: 1.5, idx: '313 / 508' },
    { id: 'UME_5230', a: 1.5, idx: '314 / 508' },
    { id: 'UME_5231', a: 0.667, idx: '315 / 508' },
    { id: 'UME_5234', a: 1.5, idx: '316 / 508' },
    { id: 'UME_5236', a: 1.5, idx: '317 / 508' },
    { id: 'UME_5243', a: 1.5, idx: '318 / 508' },
    { id: 'UME_5251', a: 1.5, idx: '319 / 508' },
    { id: 'UME_5255', a: 1.5, idx: '320 / 508' },
    { id: 'UME_5256', a: 1.5, idx: '321 / 508' },
    { id: 'UME_5257', a: 0.667, idx: '322 / 508' },
    { id: 'UME_5259', a: 0.667, idx: '323 / 508' },
    { id: 'UME_5261', a: 1.5, idx: '324 / 508' },
    { id: 'UME_5267', a: 1.5, idx: '325 / 508' },
    { id: 'UME_5278', a: 1.5, idx: '326 / 508' },
    { id: 'UME_5280', a: 1.5, idx: '327 / 508' },
    { id: 'UME_5286', a: 1.5, idx: '328 / 508' },
    { id: 'UME_5292', a: 1.5, idx: '329 / 508' },
    { id: 'UME_5293', a: 0.667, idx: '330 / 508' },
    { id: 'UME_5294', a: 0.667, idx: '331 / 508' },
    { id: 'UME_5297', a: 1.5, idx: '332 / 508' },
    { id: 'UME_5300', a: 0.667, idx: '333 / 508' },
    { id: 'UME_5301', a: 0.667, idx: '334 / 508' },
    { id: 'UME_5304', a: 0.667, idx: '335 / 508' },
    { id: 'UME_5305', a: 1.5, idx: '336 / 508' },
    { id: 'UME_5309', a: 1.5, idx: '337 / 508' },
    { id: 'UME_5310', a: 1.5, idx: '338 / 508' },
    { id: 'UME_5312', a: 1.5, idx: '339 / 508' },
    { id: 'UME_5313', a: 1.5, idx: '340 / 508' },
    { id: 'UME_5314', a: 1.5, idx: '341 / 508' },
    { id: 'UME_5315', a: 1.5, idx: '342 / 508' },
    { id: 'UME_5317', a: 1.5, idx: '343 / 508' },
    { id: 'UME_5320', a: 1.5, idx: '344 / 508' },
    { id: 'UME_5321', a: 1.5, idx: '345 / 508' },
    { id: 'UME_5322', a: 1.5, idx: '346 / 508' },
    { id: 'UME_5323', a: 1.5, idx: '347 / 508' },
    { id: 'UME_5324', a: 1.5, idx: '348 / 508' },
    { id: 'UME_5325', a: 1.5, idx: '349 / 508' },
    { id: 'UME_5326', a: 1.5, idx: '350 / 508' },
    { id: 'UME_5327', a: 1.5, idx: '351 / 508' },
    { id: 'UME_5328', a: 1.5, idx: '352 / 508' },
    { id: 'UME_5332', a: 1.5, idx: '353 / 508' },
    { id: 'UME_5345', a: 1.5, idx: '354 / 508' },
    { id: 'UME_5347', a: 1.5, idx: '355 / 508' },
    { id: 'UME_5348', a: 1.5, idx: '356 / 508' },
    { id: 'UME_5349', a: 1.5, idx: '357 / 508' },
    { id: 'UME_5351', a: 1.5, idx: '358 / 508' },
    { id: 'UME_5352', a: 1.5, idx: '359 / 508' },
    { id: 'UME_5353', a: 1.5, idx: '360 / 508' },
    { id: 'UME_5358', a: 1.5, idx: '361 / 508' },
    { id: 'UME_5363', a: 0.667, idx: '362 / 508' },
    { id: 'UME_5366', a: 0.667, idx: '363 / 508' },
    { id: 'UME_5367', a: 0.667, idx: '364 / 508' },
    { id: 'UME_5368', a: 0.667, idx: '365 / 508' },
    { id: 'UME_5369', a: 0.667, idx: '366 / 508' },
    { id: 'UME_5370', a: 0.667, idx: '367 / 508' },
    { id: 'UME_5375', a: 1.5, idx: '368 / 508' },
    { id: 'UME_5376', a: 1.5, idx: '369 / 508' },
    { id: 'UME_5393', a: 1.5, idx: '370 / 508' },
    { id: 'UME_5402', a: 1.5, idx: '371 / 508' },
    { id: 'UME_5410', a: 1.5, idx: '372 / 508' },
    { id: 'UME_5434', a: 1.5, idx: '373 / 508' },
    { id: 'UME_5435', a: 1.5, idx: '374 / 508' },
    { id: 'UME_5438', a: 1.5, idx: '375 / 508' },
    { id: 'UME_5442', a: 1.5, idx: '376 / 508' },
    { id: 'UME_5444', a: 1.5, idx: '377 / 508' },
    { id: 'UME_5446', a: 1.5, idx: '378 / 508' },
    { id: 'UME_5454', a: 1.5, idx: '379 / 508' },
    { id: 'UME_5461', a: 1.5, idx: '380 / 508' },
    { id: 'UME_5463', a: 1.5, idx: '381 / 508' },
    { id: 'UME_5465', a: 1.5, idx: '382 / 508' },
    { id: 'UME_5472', a: 0.667, idx: '383 / 508' },
    { id: 'UME_5476', a: 0.667, idx: '384 / 508' },
    { id: 'UME_5479', a: 0.667, idx: '385 / 508' },
    { id: 'UME_5480', a: 0.667, idx: '386 / 508' },
    { id: 'UME_5488', a: 0.667, idx: '387 / 508' },
    { id: 'UME_5490', a: 0.667, idx: '388 / 508' },
    { id: 'UME_5491', a: 0.667, idx: '389 / 508' },
    { id: 'UME_5494', a: 0.667, idx: '390 / 508' },
    { id: 'UME_5497', a: 0.667, idx: '391 / 508' },
    { id: 'UME_5500', a: 0.667, idx: '392 / 508' },
    { id: 'UME_5511', a: 1.5, idx: '393 / 508' },
    { id: 'UME_5513', a: 1.5, idx: '394 / 508' },
    { id: 'UME_5514', a: 1.5, idx: '395 / 508' },
    { id: 'UME_5521', a: 1.5, idx: '396 / 508' },
    { id: 'UME_5522', a: 1.5, idx: '397 / 508' },
    { id: 'UME_5523', a: 1.5, idx: '398 / 508' },
    { id: 'UME_5527', a: 1.5, idx: '399 / 508' },
    { id: 'UME_5529', a: 0.667, idx: '400 / 508' },
    { id: 'UME_5533', a: 0.667, idx: '401 / 508' },
    { id: 'UME_5536', a: 0.667, idx: '402 / 508' },
    { id: 'UME_5537', a: 0.667, idx: '403 / 508' },
    { id: 'UME_5538', a: 0.667, idx: '404 / 508' },
    { id: 'UME_5540', a: 0.667, idx: '405 / 508' },
    { id: 'UME_5541', a: 0.667, idx: '406 / 508' },
    { id: 'UME_5545', a: 0.667, idx: '407 / 508' },
    { id: 'UME_5546', a: 0.667, idx: '408 / 508' },
    { id: 'UME_5549', a: 1.5, idx: '409 / 508' },
    { id: 'UME_5550', a: 1.5, idx: '410 / 508' },
    { id: 'UME_5559', a: 1.5, idx: '411 / 508' },
    { id: 'UME_5561', a: 1.5, idx: '412 / 508' },
    { id: 'UME_5573', a: 1.5, idx: '413 / 508' },
    { id: 'UME_5574', a: 1.5, idx: '414 / 508' },
    { id: 'UME_5577', a: 1.5, idx: '415 / 508' },
    { id: 'UME_5579', a: 1.5, idx: '416 / 508' },
    { id: 'UME_5581', a: 1.5, idx: '417 / 508' },
    { id: 'UME_5585', a: 1.5, idx: '418 / 508' },
    { id: 'UME_5586', a: 1.5, idx: '419 / 508' },
    { id: 'UME_5592', a: 1.5, idx: '420 / 508' },
    { id: 'UME_5604', a: 1.501, idx: '421 / 508' },
    { id: 'UME_5606', a: 1.5, idx: '422 / 508' },
    { id: 'UME_5618', a: 0.667, idx: '423 / 508' },
    { id: 'UME_5622', a: 0.667, idx: '424 / 508' },
    { id: 'UME_5626', a: 1.5, idx: '425 / 508' },
    { id: 'UME_5629', a: 1.5, idx: '426 / 508' },
    { id: 'UME_5636', a: 1.5, idx: '427 / 508' },
    { id: 'UME_5645', a: 0.667, idx: '428 / 508' },
    { id: 'UME_5657', a: 1.5, idx: '429 / 508' },
    { id: 'UME_5659', a: 1.5, idx: '430 / 508' },
    { id: 'UME_5661', a: 1.5, idx: '431 / 508' },
    { id: 'UME_5662', a: 1.5, idx: '432 / 508' },
    { id: 'UME_5663', a: 1.5, idx: '433 / 508' },
    { id: 'UME_5666', a: 1.5, idx: '434 / 508' },
    { id: 'UME_5668', a: 1.5, idx: '435 / 508' },
    { id: 'UME_5673', a: 1.5, idx: '436 / 508' },
    { id: 'UME_5678', a: 0.667, idx: '437 / 508' },
    { id: 'UME_5680', a: 0.667, idx: '438 / 508' },
    { id: 'UME_5686', a: 1.5, idx: '439 / 508' },
    { id: 'UME_5691', a: 1.5, idx: '440 / 508' },
    { id: 'UME_5695', a: 1.5, idx: '441 / 508' },
    { id: 'UME_5698', a: 1.5, idx: '442 / 508' },
    { id: 'UME_5711', a: 1.5, idx: '443 / 508' },
    { id: 'UME_5715', a: 1.5, idx: '444 / 508' },
    { id: 'UME_5716', a: 1.5, idx: '445 / 508' },
    { id: 'UME_5719', a: 1.5, idx: '446 / 508' },
    { id: 'UME_5722', a: 1.5, idx: '447 / 508' },
    { id: 'UME_5727', a: 1.5, idx: '448 / 508' },
    { id: 'UME_5729', a: 1.5, idx: '449 / 508' },
    { id: 'UME_5731', a: 1.5, idx: '450 / 508' },
    { id: 'UME_5733', a: 1.5, idx: '451 / 508' },
    { id: 'UME_5739', a: 1.5, idx: '452 / 508' },
    { id: 'UME_5744', a: 1.5, idx: '453 / 508' },
    { id: 'UME_5748', a: 1.5, idx: '454 / 508' },
    { id: 'UME_5749', a: 1.5, idx: '455 / 508' },
    { id: 'UME_5756', a: 1.5, idx: '456 / 508' },
    { id: 'UME_5757', a: 1.5, idx: '457 / 508' },
    { id: 'UME_5759', a: 1.5, idx: '458 / 508' },
    { id: 'UME_5763', a: 1.5, idx: '459 / 508' },
    { id: 'UME_5767', a: 1.5, idx: '460 / 508' },
    { id: 'UME_5769', a: 1.5, idx: '461 / 508' },
    { id: 'UME_5771', a: 1.5, idx: '462 / 508' },
    { id: 'UME_5772', a: 1.5, idx: '463 / 508' },
    { id: 'UME_5783', a: 0.666, idx: '464 / 508' },
    { id: 'UME_5787', a: 1.5, idx: '465 / 508' },
    { id: 'UME_5799', a: 1.5, idx: '466 / 508' },
    { id: 'UME_5802', a: 1.5, idx: '467 / 508' },
    { id: 'UME_5803', a: 1.5, idx: '468 / 508' },
    { id: 'UME_5810', a: 1.5, idx: '469 / 508' },
    { id: 'UME_5819', a: 1.5, idx: '470 / 508' },
    { id: 'UME_5822', a: 1.5, idx: '471 / 508' },
    { id: 'UME_5825', a: 1.501, idx: '472 / 508' },
    { id: 'UME_5827', a: 1.5, idx: '473 / 508' },
    { id: 'UME_5830', a: 1.5, idx: '474 / 508' },
    { id: 'UME_5831', a: 1.5, idx: '475 / 508' },
    { id: 'UME_5838', a: 1.5, idx: '476 / 508' },
    { id: 'UME_5842', a: 1.5, idx: '477 / 508' },
    { id: 'UME_5847', a: 1.5, idx: '478 / 508' },
    { id: 'UME_5852', a: 1.5, idx: '479 / 508' },
    { id: 'UME_5861', a: 1.501, idx: '480 / 508' },
    { id: 'UME_5876', a: 1.5, idx: '481 / 508' },
    { id: 'UME_5880', a: 1.5, idx: '482 / 508' },
    { id: 'UME_5904', a: 1.5, idx: '483 / 508' },
    { id: 'UME_5906', a: 1.5, idx: '484 / 508' },
    { id: 'UME_5913', a: 0.666, idx: '485 / 508' },
    { id: 'UME_5914', a: 0.666, idx: '486 / 508' },
    { id: 'UME_5915', a: 0.666, idx: '487 / 508' },
    { id: 'UME_5916', a: 0.666, idx: '488 / 508' },
    { id: 'UME_5917', a: 0.666, idx: '489 / 508' },
    { id: 'UME_5918', a: 0.666, idx: '490 / 508' },
    { id: 'UME_5919', a: 0.666, idx: '491 / 508' },
    { id: 'UME_5920', a: 0.666, idx: '492 / 508' },
    { id: 'UME_5921', a: 0.666, idx: '493 / 508' },
    { id: 'UME_5922', a: 0.666, idx: '494 / 508' },
    { id: 'UME_5929', a: 1.501, idx: '495 / 508' },
    { id: 'UME_5940', a: 1.501, idx: '496 / 508' },
    { id: 'UME_5947', a: 1.5, idx: '497 / 508' },
    { id: 'UME_5951', a: 1.5, idx: '498 / 508' },
    { id: 'UME_5953', a: 1.5, idx: '499 / 508' },
    { id: 'UME_5957', a: 1.5, idx: '500 / 508' },
    { id: 'UME_5958', a: 1.5, idx: '501 / 508' },
    { id: 'UME_5960', a: 1.5, idx: '502 / 508' },
    { id: 'UME_5965', a: 0.667, idx: '503 / 508' },
    { id: 'UME_5968', a: 1.5, idx: '504 / 508' },
    { id: 'UME_5974', a: 1.5, idx: '505 / 508' },
    { id: 'UME_5977', a: 1.5, idx: '506 / 508' },
    { id: 'UME_5980', a: 1.5, idx: '507 / 508' },
    { id: 'UME_5982', a: 1.5, idx: '508 / 508' }
  ];

  /* Merge SHOW metadata into every photo */
  const PHOTOS = PHOTO_FILES.map(f => ({
    ...SHOW,
    id:  f.id,
    a:   f.a,
    idx: f.idx,
  }));

  /* -----------------------------------------------------------------------
     3. Scatter layout — photos freely drift, overlap, and blend
     ----------------------------------------------------------------------- */
  const gridEl    = document.getElementById('photo-grid');
  const loadingEl = document.getElementById('grid-loading');

  // Deterministic PRNG so layout stays stable across renders
  // (mulberry32 — small, fast, seedable)
  function mulberry32(seed) {
    return function () {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function buildScatter() {
    gridEl.innerHTML = '';
    const containerW = gridEl.clientWidth;
    if (!containerW) return;

    // Scale base tile sizes down for narrow viewports
    const scale = containerW < 560 ? 0.55
                : containerW < 900 ? 0.72
                : containerW < 1300 ? 0.9
                : 1.0;

    // Build placement list with deterministic per-photo randomness
    const rand = mulberry32(0x5EED0A7);
    const items = PHOTOS.map((p, i) => {
      const r1  = rand();  // size tier
      const r2  = rand();  // size within tier
      const r3  = rand();  // x placement
      const r4  = rand();  // y placement
      const r5  = rand();  // drift dx amp
      const r6  = rand();  // drift dy amp
      const r7  = rand();  // drift duration
      const r8  = rand();  // drift delay
      // Each axis gets its own independent duration / direction / phase so
      // no two axes ever sync — this is what makes the tumble read as true
      // 3D instead of collapsing to a 2D-looking oscillation.
      const r9  = rand();  // X-axis duration
      const r10 = rand();  // X-axis direction
      const r11 = rand();  // X-axis start phase
      const r12 = rand();  // Y-axis duration
      const r13 = rand();  // Y-axis direction
      const r14 = rand();  // Y-axis start phase
      const r15 = rand();  // Z-axis duration
      const r16 = rand();  // Z-axis direction
      const r17 = rand();  // Z-axis start phase
      const r18 = rand();  // depth (translateZ) — spreads tiles through 3D space
      const r19 = rand();  // static base tilt on X — persistent per-photo orientation
      const r20 = rand();  // static base tilt on Y — persistent per-photo orientation

      // Tier by roll: 58% small, 30% medium, 12% large
      let w, tier;
      if (r1 < 0.58) {
        tier = 's';
        w = (110 + r2 * 60);          // small: 110–170
      } else if (r1 < 0.88) {
        tier = 'm';
        w = (210 + r2 * 90);          // medium: 210–300
      } else {
        tier = 'l';
        w = (340 + r2 * 130);         // large: 340–470
      }
      w = Math.round(w * scale);
      const h = Math.round(w / p.a);

      return {
        ...p,
        w, h, tier,
        rx: r3, ry: r4,
        dx: r5, dy: r6, dur: r7, delay: r8,
        xDur: r9,  xDir: r10, xStart: r11,
        yDur: r12, yDir: r13, yStart: r14,
        zDur: r15, zDir: r16, zStart: r17,
        depth: r18,
        baseTiltX: r19,
        baseTiltY: r20,
      };
    });

    // Choose canvas height so the total tile area sits at a comfortable density
    // (density > 1 means overlap, which is what we want)
    const totalArea = items.reduce((s, it) => s + it.w * it.h, 0);
    const density   = 1.45; // overlap factor — higher = more overlap
    const canvasH   = Math.max(1600, Math.round(totalArea * density / containerW));
    const marginTop = 40;
    const marginBot = 80;
    const usableH   = canvasH - marginTop - marginBot;

    gridEl.style.height = canvasH + 'px';

    // ~~~~ Powder-snow layout ~~~~
    // Photos are spread horizontally across the canvas and vertically over the
    // full usable height. Each one starts far above its landing spot and
    // slowly drifts down to its resting place (see @keyframes photo-snowfall
    // in CSS). Delays are assigned after the position pass so the pile fills
    // from the bottom up while new photos keep appearing at the top — the
    // powder-snow accumulation the user asked for.
    const halfW = containerW * 0.44;   // horizontal spread from centre
    const halfD = 700;                 // depth range ± px (gentle 3D layering during fall)

    // Place each tile — pure random with slight margin buffer
    // (deterministic thanks to seeded PRNG above)
    const frag = document.createDocumentFragment();
    const wraps = [];   // { el, landY } — collected so we can sort and stagger the fall

    items.forEach((p, i) => {
      const maxY = Math.max(0, usableH - p.h);
      const y   = Math.round(marginTop + p.ry * maxY);

      // ~~~~ Landing position ~~~~
      // p.rx maps to a horizontal offset inside the canvas, p.depth to a
      // gentle Z offset so the field still reads as three-dimensional
      // instead of a flat wallpaper. y is the vertical landing spot; the
      // fall animation starts far above and settles here.
      const cxOff = (p.rx    - 0.5) * 2 * halfW;
      const czOff = (p.depth - 0.5) * 2 * halfD;
      const x     = Math.round((containerW - p.w) / 2 + cxOff);

      // ---- Snowfall params ----
      // Each photo falls from a randomised height above the canvas down to
      // its landing spot, with a slight sideways offset so the paths aren't
      // perfectly vertical (powder-snow drift, not brick-drop).  The exact
      // animation delay is assigned AFTER this loop, once every landing y
      // is known — that way we can sort by landing y and let the pile
      // build from the bottom up.
      const fallStartY = -700 - p.dur * 500;               // -700 to -1200 px above landing
      const fallDxStart = (p.dx - 0.5) * 140;              // ±70 px horizontal drift on the way down
      const fallDur    = 9 + p.delay * 7;                  // 9–16 s per photo, gentle powder pace

      // ---- Continuous 3D tumble — one animation per axis ----
      // Each axis has its own base range so no two axes ever share the same
      // period. That prevents the composed rotation from folding back
      // through identity, and gives a real "shard tumbling in space" feel.
      // These run forever, so photos keep spinning even after they've
      // landed in the pile.
      const xDur    = 46 + p.xDur * 90;                  // 46–136s
      const xDir    = p.xDir < 0.5 ? 'normal' : 'reverse';
      const xDelay  = -p.xStart * xDur;

      const yDur    = 52 + p.yDur * 100;                 // 52–152s
      const yDir    = p.yDir < 0.5 ? 'normal' : 'reverse';
      const yDelay  = -p.yStart * yDur;

      const zDur    = 40 + p.zDur * 80;                  // 40–120s
      const zDir    = p.zDir < 0.5 ? 'normal' : 'reverse';
      const zDelay  = -p.zStart * zDur;

      // ---- 3D depth position — volumetric Z with tier bias ----
      // czOff spreads photos through the box on Z. Large prints get pulled
      // slightly forward and small ones pushed back, so tier depth reads
      // as scale/priority without collapsing everything to one plane.
      const tierBias = p.tier === 'l' ?  120
                     : p.tier === 'm' ?    0
                     :                  - 120;
      const zPos     = czOff + tierBias;

      // ---- Persistent per-photo base tilt ----
      // Each photo carries its own static ±22° tilt on X and Y. During the
      // fall this makes each shard drift down at its own angle, and once
      // landed each keeps that permanent orientation — no coplanar wall.
      const baseRx = (p.baseTiltX - 0.5) * 44;            // ±22°
      const baseRy = (p.baseTiltY - 0.5) * 44;            // ±22°

      // ---- Depth-based opacity + focus fade ----
      // Nearer photos are brighter; far-back ones softly fade. The gradient
      // is mild so distant photos still register as part of the field.
      const depthNorm   = czOff / halfD;                     // -1 (back) → +1 (front)
      const depthFade   = (depthNorm + 1) * 0.5;             // 0 (deep back) → 1 (front)
      const tierOpac    = p.tier === 's' ? 0.55
                        : p.tier === 'm' ? 0.68
                        :                  0.80;
      const baseOpacity = tierOpac + depthFade * 0.18;
      // Small deep-back shards get a faint blur — out-of-focus atmosphere.
      const blurPx = p.tier === 's' && depthNorm < -0.25 ? 1.4 : 0;

      const wrap = document.createElement('div');
      wrap.className = 'photo-tile-wrap';
      wrap.style.left  = x + 'px';
      wrap.style.top   = y + 'px';
      wrap.style.width = p.w + 'px';
      wrap.style.height = p.h + 'px';
      wrap.style.setProperty('--zpos',           zPos.toFixed(1) + 'px');
      wrap.style.setProperty('--base-rx',        baseRx.toFixed(2) + 'deg');
      wrap.style.setProperty('--base-ry',        baseRy.toFixed(2) + 'deg');
      wrap.style.setProperty('--fall-start-y',   fallStartY.toFixed(0) + 'px');
      wrap.style.setProperty('--fall-dx-start',  fallDxStart.toFixed(1) + 'px');
      wrap.style.setProperty('--fall-dur',       fallDur.toFixed(1) + 's');
      // --fall-delay is set in the sort pass below.

      // Three nested layers, one per axis, so they animate independently.
      // Nesting order: X (outer) → Y → Z (inner). The composed transform on
      // the tile is rotateX(t_x) · rotateY(t_y) · rotateZ(t_z), each on its
      // own timeline. Because each axis has an independent period, the
      // composition never returns to identity — it just keeps tumbling.
      const rotX = document.createElement('div');
      rotX.className = 'photo-tile-rot-x';
      rotX.style.setProperty('--rx-dur',   xDur.toFixed(1) + 's');
      rotX.style.setProperty('--rx-dir',   xDir);
      rotX.style.setProperty('--rx-delay', xDelay.toFixed(1) + 's');

      const rotY = document.createElement('div');
      rotY.className = 'photo-tile-rot-y';
      rotY.style.setProperty('--ry-dur',   yDur.toFixed(1) + 's');
      rotY.style.setProperty('--ry-dir',   yDir);
      rotY.style.setProperty('--ry-delay', yDelay.toFixed(1) + 's');

      const rotZ = document.createElement('div');
      rotZ.className = 'photo-tile-rot';   // keep old class = Z axis
      rotZ.style.setProperty('--rot-dur',   zDur.toFixed(1) + 's');
      rotZ.style.setProperty('--rot-dir',   zDir);
      rotZ.style.setProperty('--rot-delay', zDelay.toFixed(1) + 's');

      const tile = document.createElement('button');
      tile.type = 'button';
      tile.className = `photo-tile photo-tile--${p.tier}`;
      tile.dataset.id  = p.id;
      tile.dataset.idx = p.idx;
      tile.setAttribute('aria-label', `${SHOW.title} — ${p.idx}`);
      tile.style.setProperty('--base-opacity', baseOpacity.toFixed(2));
      if (blurPx > 0) tile.style.setProperty('--base-blur', blurPx + 'px');

      const img = document.createElement('img');
      img.loading = 'lazy';
      img.decoding = 'async';
      img.alt = `${SHOW.title} ${p.idx}`;
      img.src = `images/${p.id}_t.jpg`;
      img.addEventListener('load', () => img.classList.add('is-loaded'), { once: true });
      img.addEventListener('error', () => img.classList.add('is-loaded'), { once: true });

      const idx = document.createElement('span');
      idx.className = 'photo-tile__idx';
      idx.textContent = p.idx;

      tile.appendChild(img);
      tile.appendChild(idx);
      tile.addEventListener('click', () => openLightbox(p));

      rotZ.appendChild(tile);
      rotY.appendChild(rotZ);
      rotX.appendChild(rotY);
      wrap.appendChild(rotX);
      frag.appendChild(wrap);
      wraps.push({ el: wrap, landY: y });
    });

    // ~~~~ Powder-snow accumulation order ~~~~
    // Assign fall delays by landing-Y sorted descending: the lowest landing
    // spots get delay=0 (land first), higher spots get longer delays (land
    // later). Combined with animation-fill-mode: both on .photo-tile-wrap,
    // pre-delay photos sit hidden in their above-canvas start position, so
    // visually the bottom of the pile builds up first and new photos keep
    // drifting down from the top — pure powder-snow accumulation.
    const staggerGap = 0.12; // seconds between successive photo landings
    [...wraps]
      .sort((a, b) => b.landY - a.landY)
      .forEach((w, orderIdx) => {
        w.el.style.setProperty('--fall-delay', (orderIdx * staggerGap).toFixed(2) + 's');
      });

    gridEl.appendChild(frag);
    loadingEl.classList.add('is-done');
  }

  /* -----------------------------------------------------------------------
     4. Lightbox
     ----------------------------------------------------------------------- */
  const lb        = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lb-image');
  const lbTag     = document.getElementById('lb-tag');
  const lbIdx     = document.getElementById('lb-idx');
  const lbTitle   = document.getElementById('lb-title');
  const lbSub     = document.getElementById('lb-sub');
  const lbDesc    = document.getElementById('lb-desc');
  const lbClose   = document.getElementById('lb-close');
  const lbPrev    = document.getElementById('lb-prev');
  const lbNext    = document.getElementById('lb-next');
  let   currentI  = 0;

  function openLightbox(photo) {
    currentI = PHOTOS.findIndex(p => p.id === photo.id);
    if (currentI < 0) currentI = 0;
    showCurrent();
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lb.hidden = true;
    lbImg.src = '';
    document.body.style.overflow = '';
  }
  function showCurrent() {
    const p = PHOTOS[currentI];
    if (!p) return;
    lbImg.src   = `images/${p.id}.jpg`;
    lbImg.alt   = `${p.title} — ${p.idx}`;
    lbTag.textContent   = (p.tag || 'LIVE').toUpperCase();
    lbIdx.textContent   = p.idx;
    lbTitle.textContent = p.title;
    lbSub.textContent   = p.subtitle;
    lbDesc.textContent  = p.descJa || p.desc || '';
  }
  function step(dir) {
    currentI = (currentI + dir + PHOTOS.length) % PHOTOS.length;
    showCurrent();
  }
  lbClose.addEventListener('click', closeLightbox);
  lbPrev .addEventListener('click', () => step(-1));
  lbNext .addEventListener('click', () => step( 1));
  lb    .addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if      (e.key === 'Escape')      closeLightbox();
    else if (e.key === 'ArrowLeft')   step(-1);
    else if (e.key === 'ArrowRight')  step( 1);
  });

  /* -----------------------------------------------------------------------
     5. Smooth scroll for internal anchors
     ----------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = id ? document.getElementById(id) : null;
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* -----------------------------------------------------------------------
     6. Contact form guard
     ----------------------------------------------------------------------- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', () => {
      const btn = form.querySelector('.btn-submit');
      if (btn) { btn.disabled = true; btn.textContent = 'SENDING…'; }
    });
  }

  /* -----------------------------------------------------------------------
     7. 3D drag-rotate — grab the monochrome background and tilt the page
     ----------------------------------------------------------------------- */
  function setup3DDragRotate() {
    // #top now hosts perspective (viewpoint); #work is the actual
    // transformable layer that spins under it. Applying rotate here
    // keeps the fixed site-header outside the transformed subtree so
    // it stays pinned to the viewport during scroll.
    const target = document.getElementById('work');
    if (!target) return;

    // Anything inside these should NOT initiate a drag on mousedown —
    // the drag is only for the empty background around the photos.
    const ignoreSelector = [
      '.photo-tile-wrap',
      '.photo-tile',
      '.site-header',
      '.lightbox',
      '#about',
      '#contact',
      '.site-footer',
      'a', 'button', 'input', 'textarea', 'select', 'label',
    ].join(',');

    let dragging = false;
    let startX = 0;
    let baseY  = 0;
    let curY   = 0;
    const sensitivity = 0.35;   // degrees per pixel

    function apply(ry) {
      // Y-axis only — horizontal spin, no vertical tilt, no roll.
      // Also mirror the current rotation into a CSS custom property so
      // each photo can counter-rotate itself and stay billboarded to
      // the camera (see @keyframes photo-float in CSS). Positions of
      // the photos still swing around the volume centre, so the whole
      // thing reads as a snow-globe of drifting shards rather than a
      // signboard flipping edge-on.
      const ryStr = ry.toFixed(2) + 'deg';
      target.style.setProperty('--world-ry', ryStr);
      target.style.transform = `rotateY(${ryStr})`;
    }

    function onDown(e) {
      if (e.button !== 0) return;                        // left click only
      if (e.target.closest(ignoreSelector)) return;      // ignore UI hits
      dragging   = true;
      startX     = e.clientX;
      baseY      = curY;
      document.body.classList.add('is-dragging-3d');
      target.style.transition = 'none';
      e.preventDefault();
    }

    function onMove(e) {
      if (!dragging) return;
      const dx = e.clientX - startX;
      // Horizontal drag → spin around vertical axis (rotateY) only.
      curY = baseY + dx * sensitivity;
      apply(curY);
    }

    function onUp() {
      if (!dragging) return;
      dragging = false;
      document.body.classList.remove('is-dragging-3d');
      // Soft settle on release — no snap-back to identity, just a gentle
      // ease so the final resting angle feels intentional.
      target.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1)';
    }

    // Double-click on the empty background snaps the view back to canonical.
    function onDblClick(e) {
      if (e.target.closest(ignoreSelector)) return;
      curY = 0;
      target.style.transition = 'transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1)';
      apply(0);
    }

    document.addEventListener('mousedown',  onDown);
    document.addEventListener('mousemove',  onMove);
    document.addEventListener('mouseup',    onUp);
    document.addEventListener('mouseleave', onUp);
    document.addEventListener('dblclick',   onDblClick);
  }

  /* -----------------------------------------------------------------------
     8. Boot
     ----------------------------------------------------------------------- */
  const start = () => {
    buildScatter();
    // Drag-to-rotate intentionally disabled — the field now uses a
    // powder-snow layout where each photo falls into its own resting spot,
    // so there's no world-level rotation to grab. setup3DDragRotate is kept
    // in this file only for reference / possible future re-enable.
    // Rebuild on resize (debounced)
    let t;
    window.addEventListener('resize', () => {
      clearTimeout(t);
      t = setTimeout(buildScatter, 220);
    });
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
